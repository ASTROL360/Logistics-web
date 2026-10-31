import Link from "next/link"
import { Package, Truck, Users, LayoutDashboard, MapPin } from "lucide-react"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Shipments", href: "/shipments", icon: Package },
  { name: "Drivers", href: "/drivers", icon: Truck },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Tracking", href: "/tracking", icon: MapPin },
]

export function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col bg-gray-900 text-white">
      <div className="flex h-16 items-center px-6">
        <Package className="h-6 w-6 mr-2" />
        <span className="text-lg font-semibold">SwiftLogistics</span>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <h1 className="text-lg font-semibold">Logistics Management</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Admin User</span>
      </div>
    </header>
  )
}
