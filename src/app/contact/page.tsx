import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-700 font-medium">Get in touch with our team</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-2 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Full Name</label>
                <input className="w-full px-4 py-3 rounded-md border-2 border-gray-300" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-md border-2 border-gray-300" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Phone</label>
                <input className="w-full px-4 py-3 rounded-md border-2 border-gray-300" placeholder="+123 456 7890" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-md border-2 border-gray-300" placeholder="Your message..." />
              </div>
              <Button className="w-full bg-blue-700 hover:bg-blue-800 font-bold py-3">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card className="border-2">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-700 font-medium">+1 (555) 123-4567</p>
                <p className="text-gray-700 font-medium">+1 (555) 987-6543</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-700 font-medium">info@swiftcourier.com</p>
                <p className="text-gray-700 font-medium">support@swiftcourier.com</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-purple-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Address</h3>
                <p className="text-gray-700 font-medium">123 Logistics Avenue</p>
                <p className="text-gray-700 font-medium">Business District, NY 10001</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
