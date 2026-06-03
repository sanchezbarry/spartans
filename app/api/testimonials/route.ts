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
  const formData = await request.formData()

  const advisorSlug = formData.get('advisorSlug') as string | null
  const clientName  = formData.get('clientName')  as string | null
  const clientTitle = formData.get('clientTitle') as string | null
  const heading     = formData.get('heading')     as string | null
  const quote       = formData.get('quote')       as string | null
  const ratingRaw   = formData.get('rating')      as string | null
  const photoFile   = formData.get('photo')       as File | null

  if (!advisorSlug || !clientName || !quote) {
    return Response.json(
      { error: 'advisorSlug, clientName and quote are required.' },
      { status: 400 }
    )
  }

  try {
    let photoRef: { _type: 'image'; asset: { _type: 'reference'; _ref: string } } | undefined

    if (photoFile && photoFile.size > 0) {
      const buffer = Buffer.from(await photoFile.arrayBuffer())
      const asset = await writeClient.assets.upload('image', buffer, {
        filename: 'testimonial-photo.jpg',
        contentType: 'image/jpeg',
      })
      photoRef = {
        _type: 'image',
        asset: { _type: 'reference', _ref: asset._id },
      }
    }

    const doc = await writeClient.create({
      _type: 'testimonial',
      advisorSlug,
      clientName,
      clientTitle: clientTitle || undefined,
      heading: heading || undefined,
      quote,
      rating: ratingRaw ? Number(ratingRaw) : undefined,
      ...(photoRef && { photo: photoRef }),
      approved: false,
      submittedAt: new Date().toISOString(),
    })

    return Response.json({ success: true, id: doc._id })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    const statusCode = (err as { statusCode?: number }).statusCode
    console.error('[testimonials] Sanity write failed:', statusCode, message)
    return Response.json({ error: message, statusCode }, { status: 500 })
  }
}
