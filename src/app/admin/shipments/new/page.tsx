import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ShipmentForm } from '@/components/shipments/shipment-form'

export default function AdminNewShipmentPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-950">Create New Shipment</h1>
          <p className="mt-1 text-slate-600">Add a shipment to the system.</p>
        </div>
        <Link href="/admin/shipments"><Button variant="outline"><ArrowLeft className="h-4 w-4" /> All Shipments</Button></Link>
      </div>
      <Card className="border-slate-200 shadow-md">
        <CardHeader><CardTitle>Shipment Details</CardTitle></CardHeader>
        <CardContent><ShipmentForm listHref="/admin/shipments" /></CardContent>
      </Card>
    </div>
  )
}
