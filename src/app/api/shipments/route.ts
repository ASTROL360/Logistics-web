import { randomInt } from 'node:crypto'
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const shipments = await prisma.shipment.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(shipments)
  } catch (error) {
    console.error('Failed to fetch shipments:', error)
    return NextResponse.json({ error: 'Failed to fetch shipments' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Request body must be valid JSON' }, { status: 400 })
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ error: 'Invalid shipment details' }, { status: 400 })
  }

  const input = body as Record<string, unknown>
  const requiredFields = ['senderName', 'senderPhone', 'receiverName', 'receiverPhone', 'pickupAddress', 'deliveryAddress'] as const
  if (requiredFields.some((field) => typeof input[field] !== 'string' || !(input[field] as string).trim())) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const optionalNumber = (value: unknown) => {
    if (value === undefined || value === null || value === '') return null
    const number = Number(value)
    if (!Number.isFinite(number) || number < 0) return undefined
    return number
  }

  const weight = optionalNumber(input.weight)
  const price = optionalNumber(input.price)
  if (weight === undefined || price === undefined) {
    return NextResponse.json({ error: 'Weight and price must be non-negative numbers' }, { status: 400 })
  }

  const [senderName, senderPhone, receiverName, receiverPhone, pickupAddress, deliveryAddress] = requiredFields.map(
    (field) => (input[field] as string).trim(),
  )

  try {
    const shipment = await prisma.shipment.create({
      data: {
        trackingCode: generateTrackingCode(),
        senderName,
        senderPhone,
        receiverName,
        receiverPhone,
        pickupAddress,
        deliveryAddress,
        serviceType: typeof input.serviceType === 'string' && input.serviceType.trim() ? input.serviceType.trim() : 'STANDARD',
        weight,
        price,
        notes: typeof input.notes === 'string' && input.notes.trim() ? input.notes.trim() : null,
        updates: {
          create: {
            status: 'PENDING',
            location: pickupAddress,
            remark: 'Shipment created',
          },
        },
      },
      include: { updates: true },
    })

    return NextResponse.json(shipment, { status: 201 })
  } catch (error) {
    console.error('Failed to create shipment:', error)
    return NextResponse.json({ error: 'Failed to create shipment' }, { status: 500 })
  }
}

function generateTrackingCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let result = 'TRK-'
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(randomInt(chars.length))
  }
  return result
}
