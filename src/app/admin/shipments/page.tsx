import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ShipmentList } from '@/components/shipments/shipment-list'

export default function AdminShipmentsPage() {
  return (
    <div className="container mx-auto space-y-6 px-4 py-12">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-950">All Shipments</h1>
        <p className="mt-1 text-slate-600">Manage and track all shipments.</p>
      </div>
      <Card className="border-slate-200 shadow-md">
        <CardHeader><CardTitle>Shipment List</CardTitle></CardHeader>
        <CardContent><ShipmentList createHref="/admin/shipments/new" /></CardContent>
      </Card>
    </div>
  )
}
