import { createClient } from '@sanity/client'
import { NextRequest } from 'next/server'

const writeClient = createClient({
  projectId: 'wcccrefo',
  dataset: 'production',
  apiVersion: '2025-05-14',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
})

export async function POST(request: NextRequest) {
  const { advisorSlug, clientName, clientTitle, heading, quote, rating } =
    await request.json()

  if (!advisorSlug || !clientName || !quote) {
    return Response.json(
      { error: 'advisorSlug, clientName and quote are required.' },
      { status: 400 }
    )
  }

  try {
    const doc = await writeClient.create({
      _type: 'testimonial',
      advisorSlug,
      clientName,
      clientTitle: clientTitle || undefined,
      heading: heading || undefined,
      quote,
      rating: rating ? Number(rating) : undefined,
      approved: false,
      submittedAt: new Date().toISOString(),
    })
    return Response.json({ success: true, id: doc._id })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[testimonials] Sanity write failed:', message)
    return Response.json({ error: message }, { status: 500 })
  }
}
