'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AlertCircle, Package, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Shipment = {
  id: string
  trackingCode: string
  pickupAddress: string
  deliveryAddress: string
  senderName: string
  receiverName: string
  status: string
  createdAt: string
}

type ShipmentListProps = {
  createHref: string
}

export function ShipmentList({ createHref }: ShipmentListProps) {
  const [shipments, setShipments] = useState<Shipment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    async function loadShipments() {
      try {
        const response = await fetch('/api/shipments', { cache: 'no-store' })
        const result = await response.json()
        if (!response.ok) throw new Error(result.error || 'Unable to load shipments.')
        if (active) setShipments(result)
      } catch (loadError) {
        if (active) setError(loadError instanceof Error ? loadError.message : 'Unable to load shipments.')
      } finally {
        if (active) setLoading(false)
      }
    }

    loadShipments()
    return () => { active = false }
  }, [])

  return (
    <div className="space-y-5">
      <div className="flex justify-end">
        <Link href={createHref}>
          <Button><Plus className="h-4 w-4" /> New Shipment</Button>
        </Link>
      </div>

      {error && <div role="alert" className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800"><AlertCircle className="h-4 w-4" />{error}</div>}

      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-600">
            <tr>
              <th className="px-4 py-3 font-bold">Tracking code</th>
              <th className="px-4 py-3 font-bold">Sender / receiver</th>
              <th className="px-4 py-3 font-bold">Origin</th>
              <th className="px-4 py-3 font-bold">Destination</th>
              <th className="px-4 py-3 font-bold">Status</th>
              <th className="px-4 py-3 font-bold">Created</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr><td colSpan={6} className="px-4 py-10 text-center text-slate-500">Loading shipments…</td></tr>
            ) : shipments.length === 0 ? (
              <tr><td colSpan={6} className="px-4 py-10 text-center text-slate-500"><Package className="mx-auto mb-2 h-6 w-6 text-slate-400" />No shipments found. Create your first shipment.</td></tr>
            ) : shipments.map((shipment) => (
              <tr key={shipment.id} className="text-slate-700 hover:bg-slate-50">
                <td className="whitespace-nowrap px-4 py-3 font-bold text-blue-800">{shipment.trackingCode}</td>
                <td className="px-4 py-3"><span className="block font-medium text-slate-900">{shipment.senderName}</span><span className="block text-xs text-slate-500">to {shipment.receiverName}</span></td>
                <td className="max-w-48 px-4 py-3">{shipment.pickupAddress}</td>
                <td className="max-w-48 px-4 py-3">{shipment.deliveryAddress}</td>
                <td className="whitespace-nowrap px-4 py-3"><span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-800">{shipment.status.replace(/_/g, ' ')}</span></td>
                <td className="whitespace-nowrap px-4 py-3">{new Date(shipment.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
