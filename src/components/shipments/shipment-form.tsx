'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

type ShipmentFormProps = {
  listHref: string
  compact?: boolean
}

const fieldClass = 'mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
const labelClass = 'block text-sm font-semibold text-slate-800'

export function ShipmentForm({ listHref, compact = false }: ShipmentFormProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [createdCode, setCreatedCode] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError('')
    setCreatedCode('')

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/shipments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Could not create the shipment. Please try again.')
      }

      setCreatedCode(result.trackingCode)
      form.reset()
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Could not create the shipment. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-5">
      {createdCode && (
        <div role="status" className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-950">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
            <div className="flex-1">
              <p className="font-bold">Shipment created successfully</p>
              <p className="mt-1 text-sm">Tracking code: <span className="font-bold">{createdCode}</span></p>
              <Link className="mt-2 inline-block text-sm font-bold text-emerald-800 underline underline-offset-2" href={listHref}>
                View all shipments
              </Link>
            </div>
          </div>
        </div>
      )}

      {error && <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-800">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-4 md:grid-cols-2">
          <label className={labelClass}>Sender name<input name="senderName" required autoComplete="name" className={fieldClass} placeholder="Full name" /></label>
          <label className={labelClass}>Sender phone<input name="senderPhone" required autoComplete="tel" className={fieldClass} placeholder="Phone number" /></label>
          <label className={labelClass}>Receiver name<input name="receiverName" required className={fieldClass} placeholder="Full name" /></label>
          <label className={labelClass}>Receiver phone<input name="receiverPhone" required className={fieldClass} placeholder="Phone number" /></label>
        </div>

        <div className={compact ? 'grid gap-4 md:grid-cols-2' : 'space-y-4'}>
          <label className={labelClass}>Pickup address<input name="pickupAddress" required className={fieldClass} placeholder="Street, city, country" /></label>
          <label className={labelClass}>Delivery address<input name="deliveryAddress" required className={fieldClass} placeholder="Street, city, country" /></label>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <label className={labelClass}>Service type
            <select name="serviceType" className={fieldClass} defaultValue="STANDARD">
              <option value="STANDARD">Standard</option>
              <option value="EXPRESS">Express</option>
              <option value="SAME_DAY">Same day</option>
            </select>
          </label>
          <label className={labelClass}>Weight (kg)<input name="weight" type="number" min="0" step="0.01" className={fieldClass} placeholder="Optional" /></label>
          <label className={labelClass}>Price<input name="price" type="number" min="0" step="0.01" className={fieldClass} placeholder="Optional" /></label>
        </div>

        {!compact && <label className={labelClass}>Notes<textarea name="notes" rows={3} className={fieldClass} placeholder="Optional delivery instructions" /></label>}

        <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
          {loading ? 'Creating shipment…' : 'Create Shipment'}
        </Button>
      </form>
    </div>
  )
}
