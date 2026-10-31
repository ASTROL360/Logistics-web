import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function TrackingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Track Shipment</h2>
        <p className="text-gray-600">Enter tracking code to check status</p>
      </div>
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Tracking Lookup</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <input className="flex-1 rounded-md border px-3 py-2" placeholder="Enter tracking code (e.g., TRK-123456)" />
            <Button>
              <Search className="mr-2 h-4 w-4" />
              Track
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
