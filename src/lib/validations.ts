import { z } from 'zod'

export const shipmentSchema = z.object({
  customerId: z.string().min(1),
  origin: z.string().min(1),
  destination: z.string().min(1),
  weight: z.number().optional(),
  fee: z.number().optional(),
  notes: z.string().optional(),
})

export const trackingSchema = z.object({
  code: z.string().min(1),
})
