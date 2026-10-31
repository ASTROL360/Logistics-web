import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function NewShipmentPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Create New Shipment</h1>
          <p className="text-lg text-gray-700 font-medium">Add a new shipment to the system</p>
        </div>
        <Link href="/admin/shipments">
          <Button variant="outline" className="font-semibold border-2">Cancel</Button>
        </Link>
      </div>
      <Card className="border-2 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Shipment Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Sender Name</label>
                <input className="w-full px-4 py-3 rounded-md border-2 border-gray-300" placeholder="Full name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Sender Phone</label>
                <input className="w-full px-4 py-3 rounded-md border-2 border-gray-300" placeholder="Phone number" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Receiver Name</label>
                <input className="w-full px-4 py-3 rounded-md border-2 border-gray-300" placeholder="Full name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Receiver Phone</label>
                <input className="w-full px-4 py-3 rounded-md border-2 border-gray-300" placeholder="Phone number" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Pickup Address</label>
              <input className="w-full px-4 py-3 rounded-md border-2 border-gray-300" placeholder="Full address" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Delivery Address</label>
              <input className="w-full px-4 py-3 rounded-md border-2 border-gray-300" placeholder="Full address" />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Service Type</label>
                <select className="w-full px-4 py-3 rounded-md border-2 border-gray-300">
                  <option>STANDARD</option>
                  <option>EXPRESS</option>
                  <option>SAME_DAY</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Weight (kg)</label>
                <input type="number" className="w-full px-4 py-3 rounded-md border-2 border-gray-300" placeholder="0.0" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Price</label>
                <input type="number" className="w-full px-4 py-3 rounded-md border-2 border-gray-300" placeholder="0.00" />
              </div>
            </div>
            <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 font-bold py-3">Create Shipment</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
