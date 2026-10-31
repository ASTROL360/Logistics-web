import Link from "next/link"
import { Package, Search, Truck, Clock, ShieldCheck, MapPin, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="animate-enter text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Swift, Secure & Reliable
              <span className="block text-blue-400 mt-2">Logistics Solutions</span>
            </h1>
            <p className="animate-enter animate-delay-100 text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed font-medium">
              From express delivery to nationwide shipping, we ensure your packages reach their destination safely and on time.
            </p>
            <div className="animate-enter animate-delay-200 flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/track">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto font-bold text-base">
                  <Search className="mr-2 h-5 w-5" />
                  Track Your Shipment
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-slate-900 w-full sm:w-auto font-bold text-base">
                  View Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <Card className="animate-enter animate-delay-300 bg-white/15 backdrop-blur border-2 border-white/30 max-w-md">
              <CardContent className="p-5">
                <p className="text-sm font-bold text-white mb-3">Quick Track</p>
                <div className="flex gap-2">
                  <input 
                    placeholder="Enter tracking number" 
                    className="flex-1 px-3 py-2.5 rounded-md bg-white text-gray-900 text-sm font-medium border-2 border-gray-300"
                  />
                  <Link href="/track">
                    <Button className="bg-blue-600 hover:bg-blue-700 font-bold">Track</Button>
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
            <div className="animate-enter">
              <div className="text-3xl md:text-4xl font-extrabold text-blue-700">10K+</div>
              <div className="text-gray-900 mt-1 font-semibold">Deliveries</div>
            </div>
            <div className="animate-enter animate-delay-100">
              <div className="text-3xl md:text-4xl font-extrabold text-blue-700">500+</div>
              <div className="text-gray-900 mt-1 font-semibold">Cities Covered</div>
            </div>
            <div className="animate-enter animate-delay-200">
              <div className="text-3xl md:text-4xl font-extrabold text-blue-700">98%</div>
              <div className="text-gray-900 mt-1 font-semibold">On-Time Rate</div>
            </div>
            <div className="animate-enter animate-delay-300">
              <div className="text-3xl md:text-4xl font-extrabold text-blue-700">24/7</div>
              <div className="text-gray-900 mt-1 font-semibold">Support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">Our Services</h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto font-medium">
              Comprehensive logistics solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="animate-enter border-2 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Express Delivery</h3>
                <p className="text-gray-800 mb-4 font-medium">Same-day and next-day delivery for urgent shipments</p>
                <Link href="/services" className="text-blue-700 hover:underline inline-flex items-center font-semibold">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="animate-enter animate-delay-100 border-2 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Standard Shipping</h3>
                <p className="text-gray-800 mb-4 font-medium">Cost-effective delivery for regular shipments</p>
                <Link href="/services" className="text-blue-700 hover:underline inline-flex items-center font-semibold">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="animate-enter animate-delay-200 border-2 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Warehousing</h3>
                <p className="text-gray-800 mb-4 font-medium">Secure storage and distribution solutions</p>
                <Link href="/services" className="text-blue-700 hover:underline inline-flex items-center font-semibold">
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
