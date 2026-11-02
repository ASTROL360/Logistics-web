'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TrackPage() {
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState('')

  async function handleTrack(e: React.FormEvent) {
    e.preventDefault()
    if (!code.trim()) return
    setLoading(true)
    setError('')
    setResult(null)
    try {
      const res = await fetch('/api/track/' + code.trim().toUpperCase())
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Not found')
      setResult(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Track Your Shipment</h1>
        <p className="text-lg text-gray-700 font-medium">Enter your tracking number to see real-time status</p>
      </div>
      <Card className="border-2 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Enter Tracking Number</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleTrack} className="flex gap-3">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="e.g., TRK-AB12XY34"
              className="flex-1 px-4 py-3 rounded-md border-2 border-gray-300 text-gray-900 font-medium"
            />
            <Button type="submit" disabled={loading} className="px-6 py-3 bg-blue-700 hover:bg-blue-800 font-bold">
              <Search className="mr-2 h-5 w-5" />
              {loading ? 'Tracking...' : 'Track'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {error && (
        <Card className="mt-6 border-2 border-red-200 bg-red-50">
          <CardContent className="p-6 text-center">
            <p className="text-red-700 font-semibold">{error}</p>
          </CardContent>
        </Card>
      )}

      {result && (
        <Card className="mt-6 border-2 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Tracking #: {result.trackingCode}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-bold text-gray-600 mb-1">FROM</p>
                <p className="text-gray-900 font-medium">{result.pickupAddress}</p>
                <p className="text-gray-700 text-sm mt-1">{result.senderName} • {result.senderPhone}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-bold text-gray-600 mb-1">TO</p>
                <p className="text-gray-900 font-medium">{result.deliveryAddress}</p>
                <p className="text-gray-700 text-sm mt-1">{result.receiverName} • {result.receiverPhone}</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Shipment History</h3>
              <div className="space-y-4">
                {(result.updates || []).map((u: any, idx: number) => (
                  <div key={u.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-700"></div>
                      {idx < (result.updates.length - 1) && <div className="w-0.5 h-full bg-blue-200 mt-1"></div>}
                    </div>
                    <div className="pb-4 flex-1">
                      <p className="font-bold text-gray-900">{u.status.replace(/_/g, ' ')}</p>
                      {u.location && <p className="text-gray-700 text-sm">{u.location}</p>}
                      {u.remark && <p className="text-gray-600 text-sm">{u.remark}</p>}
                      <p className="text-xs text-gray-500 mt-1">{u.createdAt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
