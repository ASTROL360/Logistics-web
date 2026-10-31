import Link from "next/link"
import { Package, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Package className="h-7 w-7 text-blue-700" />
          <span className="text-xl font-extrabold tracking-tight text-slate-950">SwiftCourier</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
          <Link href="/" className="text-slate-700 transition-colors hover:text-blue-700">Home</Link>
          <Link href="/services" className="text-slate-700 transition-colors hover:text-blue-700">Services</Link>
          <Link href="/track" className="text-slate-700 transition-colors hover:text-blue-700">Track Shipment</Link>
          <Link href="/about" className="text-slate-700 transition-colors hover:text-blue-700">About</Link>
          <Link href="/contact" className="text-slate-700 transition-colors hover:text-blue-700">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/track">
            <Button variant="outline" size="sm">
              <Search className="mr-2 h-4 w-4" /> Track
            </Button>
          </Link>
          <Link href="/admin">
            <Button size="sm">Admin</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
