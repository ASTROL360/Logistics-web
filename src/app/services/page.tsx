import { Card, CardContent } from '@/components/ui/card'
import { Truck, Package, Clock } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Our Services</h1>
        <p className="text-xl text-gray-700 font-medium">Reliable logistics solutions for all your shipping needs</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="border-2 hover:shadow-xl transition-shadow">
          <CardContent className="p-8">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Truck className="h-7 w-7 text-blue-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Express Delivery</h2>
            <p className="text-gray-700 mb-4 font-medium">Same-day and next-day delivery for time-critical shipments across major cities.</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full"></span>Same-day delivery</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full"></span>Next-day delivery</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full"></span>Priority handling</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="border-2 hover:shadow-xl transition-shadow">
          <CardContent className="p-8">
            <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Package className="h-7 w-7 text-green-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Standard Shipping</h2>
            <p className="text-gray-700 mb-4 font-medium">Cost-effective shipping solution for regular deliveries with reliable transit times.</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-700 rounded-full"></span>2-5 day delivery</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-700 rounded-full"></span>Nationwide coverage</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-700 rounded-full"></span>Affordable rates</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="border-2 hover:shadow-xl transition-shadow">
          <CardContent className="p-8">
            <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <Clock className="h-7 w-7 text-purple-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Warehousing</h2>
            <p className="text-gray-700 mb-4 font-medium">Secure storage and distribution services for your inventory and fulfillment needs.</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-700 rounded-full"></span>Safe storage</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-700 rounded-full"></span>Order fulfillment</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-700 rounded-full"></span>Inventory management</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
