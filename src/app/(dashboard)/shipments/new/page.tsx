import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NewShipmentPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Create Shipment</h2>
          <p className="text-gray-600">Add a new shipment</p>
        </div>
        <Link href="/shipments">
          <Button variant="outline">Cancel</Button>
        </Link>
      </div>
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Shipment Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Origin</label>
                <input className="mt-1 w-full rounded-md border px-3 py-2" placeholder="City, Country" />
              </div>
              <div>
                <label className="text-sm font-medium">Destination</label>
                <input className="mt-1 w-full rounded-md border px-3 py-2" placeholder="City, Country" />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Weight (kg)</label>
                <input type="number" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="0.0" />
              </div>
              <div>
                <label className="text-sm font-medium">Fee</label>
                <input type="number" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="0.00" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Notes</label>
              <textarea className="mt-1 w-full rounded-md border px-3 py-2" rows={3} />
            </div>
            <Button type="submit">Create Shipment</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
