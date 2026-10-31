import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, Truck, CheckCircle, Clock } from "lucide-react"

const stats = [
  { name: "Total Shipments", value: "1,284", icon: Package, color: "text-blue-600" },
  { name: "In Transit", value: "342", icon: Truck, color: "text-yellow-600" },
  { name: "Delivered", value: "892", icon: CheckCircle, color: "text-green-600" },
  { name: "Pending", value: "50", icon: Clock, color: "text-orange-600" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-gray-600">Overview of your logistics operations</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.name}</CardTitle>
              <stat.icon className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Shipments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-gray-600">No shipments yet</div>
        </CardContent>
      </Card>
    </div>
  )
}
