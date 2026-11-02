import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ShipmentList } from '@/components/shipments/shipment-list'

export default function ShipmentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">Shipments</h2>
        <p className="mt-1 text-slate-600">Manage and track all shipments.</p>
      </div>
      <Card>
        <CardHeader><CardTitle>All Shipments</CardTitle></CardHeader>
        <CardContent><ShipmentList createHref="/shipments/new" /></CardContent>
      </Card>
    </div>
  )
}
