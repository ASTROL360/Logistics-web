import Link from "next/link"
import { Package, Search, Truck, Clock, ShieldCheck, MapPin, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Swift, Secure & Reliable
              <span className="block text-blue-400">Logistics Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From express delivery to nationwide shipping, we ensure your packages reach their destination safely and on time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/track">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                  <Search className="mr-2 h-5 w-5" />
                  Track Your Shipment
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 w-full sm:w-auto">
                  View Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <Card className="bg-white/10 backdrop-blur border-white/20 max-w-md">
              <CardContent className="p-4">
                <p className="text-sm text-gray-300 mb-3">Quick Track</p>
                <div className="flex gap-2">
                  <input 
                    placeholder="Enter tracking number" 
                    className="flex-1 px-3 py-2 rounded-md bg-white/90 text-gray-900 text-sm"
                  />
                  <Link href="/track">
                    <Button className="bg-blue-600 hover:bg-blue-700">Track</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600">10K+</div>
              <div className="text-gray-600 mt-1">Deliveries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600 mt-1">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600">98%</div>
              <div className="text-gray-600 mt-1">On-Time Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600 mt-1">Support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Express Delivery</h3>
                <p className="text-gray-600 mb-4">Same-day and next-day delivery for urgent shipments</p>
                <Link href="/services" className="text-blue-600 hover:underline inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justifying-center mb-4">
                  <Package className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Standard Shipping</h3>
                <p className="text-gray-600 mb-4">Cost-effective delivery for regular shipments</p>
                <Link href="/services" className="text-blue-600 hover:underline inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Warehousing</h3>
                <p className="text-gray-600 mb-4">Secure storage and distribution solutions</p>
                <Link href="/services" className="text-blue-600 hover:underline inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
