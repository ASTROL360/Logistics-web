import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ShipmentForm } from '@/components/shipments/shipment-form'

export default function NewShipmentPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">Create Shipment</h2>
          <p className="mt-1 text-slate-600">Enter the sender, receiver, and delivery details.</p>
        </div>
        <Link href="/shipments"><Button variant="outline"><ArrowLeft className="h-4 w-4" /> All Shipments</Button></Link>
      </div>
      <Card>
        <CardHeader><CardTitle>Shipment Details</CardTitle></CardHeader>
        <CardContent><ShipmentForm listHref="/shipments" compact /></CardContent>
      </Card>
    </div>
  )
}
