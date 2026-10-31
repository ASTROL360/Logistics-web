import { Card, CardContent } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About SwiftCourier</h1>
        <p className="text-xl text-gray-700 font-medium">Your trusted partner in logistics and delivery</p>
      </div>
      <Card className="border-2 shadow-lg">
        <CardContent className="p-8 space-y-6">
          <p className="text-gray-800 text-lg leading-relaxed">
            SwiftCourier is a leading courier and logistics company committed to providing fast, reliable, and secure delivery solutions. 
            We serve businesses and individuals with comprehensive shipping services across the nation.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            With years of experience in the logistics industry, we understand the importance of timely deliveries and take pride 
            in our commitment to excellence, customer satisfaction, and innovative solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-6 pt-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-extrabold text-blue-700">10K+</div>
              <div className="text-gray-900 font-semibold mt-1">Happy Customers</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-extrabold text-green-700">98%</div>
              <div className="text-gray-900 font-semibold mt-1">On-Time Delivery</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-3xl font-extrabold text-purple-700">24/7</div>
              <div className="text-gray-900 font-semibold mt-1">Support Available</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
