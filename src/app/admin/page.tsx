import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Package, Plus, Search } from 'lucide-react'

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Admin Dashboard</h1>
        <p className="text-lg text-gray-700 font-medium">Manage shipments and track deliveries</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-bold">
              <Package className="h-6 w-6 text-blue-700" />
              Shipments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-gray-700 font-medium">Create and manage all shipments</p>
            <div className="flex gap-2">
              <Link href="/admin/shipments" className="flex-1">
                <Button className="w-full bg-blue-700 hover:bg-blue-800 font-semibold">View All Shipments</Button>
              </Link>
              <Link href="/admin/shipments/new">
                <Button className="font-semibold"><Plus className="mr-2 h-4 w-4" /> New</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card className="border-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-bold">
              <Search className="h-6 w-6 text-green-700" />
              Tracking
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-gray-700 font-medium">Test public tracking functionality</p>
            <Link href="/track">
              <Button variant="outline" className="w-full font-semibold border-2">Go to Tracking Page</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
