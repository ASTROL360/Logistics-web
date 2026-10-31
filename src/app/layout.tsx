import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/site/navbar'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SwiftCourier - Courier & Logistics',
  description: 'Reliable courier and logistics services',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear()
  return (
    <html lang="en">
      <body className={geistSans.variable + ' ' + geistMono.variable + ' antialiased'}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="border-t bg-gray-900 text-white py-8 text-center">
            <div className="container mx-auto px-4">
              <p className="font-semibold">&copy; {year} SwiftCourier. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
