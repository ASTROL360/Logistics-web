import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus } from 'lucide-react'

export default function AdminShipmentsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">All Shipments</h1>
          <p className="text-lg text-gray-700 font-medium">Manage and track all shipments</p>
        </div>
        <Link href="/admin/shipments/new">
          <Button className="bg-blue-700 hover:bg-blue-800 font-bold px-6">
            <Plus className="mr-2 h-5 w-5" /> Create Shipment
          </Button>
        </Link>
      </div>
      <Card className="border-2 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Shipment List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-gray-600">
            <p className="font-medium">No shipments yet. Create your first shipment!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
