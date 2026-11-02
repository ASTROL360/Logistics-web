import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(_request: Request, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params

  try {
    const shipment = await prisma.shipment.findUnique({
      where: { trackingCode: code.trim().toUpperCase() },
      include: {
        updates: {
          orderBy: { createdAt: 'asc' },
        },
      },
    })

    if (!shipment) {
      return NextResponse.json({ error: 'Shipment not found' }, { status: 404 })
    }

    return NextResponse.json(shipment)
  } catch (error) {
    console.error('Failed to track shipment:', error)
    return NextResponse.json({ error: 'Failed to track shipment' }, { status: 500 })
  }
}
