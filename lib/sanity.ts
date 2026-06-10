import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'wcccrefo',
  dataset: 'production',
  apiVersion: '2025-05-14',
  useCdn: false,
})

export interface SanityPost {
  _id: string
  title: string
  slug: string
  category: 'finance' | 'lifestyle' | 'current-affairs' | 'insurance'
  excerpt: string
  publishedAt: string
  featured?: boolean
  coverImage?: {
    url: string
    alt: string
  }
  thumbnail?: {
    url: string
    alt?: string
  }
}

export interface SanityPostFull extends SanityPost {
  body: PortableTextBlock[]
  seoTitle?: string
  seoDescription?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PortableTextBlock = any

export const POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    publishedAt,
    featured,
    coverImage {
      "url": asset->url,
      alt
    },
    thumbnail {
      "url": asset->url,
      alt
    }
  }
`

export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    publishedAt,
    featured,
    coverImage {
      "url": asset->url,
      alt
    },
    body[] {
      ...,
      _type == "image" => {
        ...,
        "url": asset->url,
        alt,
        caption
      }
    },
    seoTitle,
    seoDescription
  }
`

export const ALL_SLUGS_QUERY = `
  *[_type == "post"] { "slug": slug.current }
`

// ── Events ────────────────────────────────────────────────────────────────────

export interface SanityEvent {
  _id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  type?: string
  isFree: boolean
  registerUrl?: string
}

export const EVENTS_QUERY = `
  *[_type == "event"] | order(date asc) {
    _id,
    title,
    description,
    date,
    time,
    location,
    type,
    isFree,
    registerUrl
  }
`

// ── Testimonials ──────────────────────────────────────────────────────────────

export interface SanityTestimonial {
  _id: string
  advisorSlug: string
  clientName: string
  clientTitle?: string
  heading?: string
  quote: string
  rating?: number
  photo?: { url: string }
  submittedAt: string
}

export const TESTIMONIALS_BY_ADVISOR_QUERY = `
  *[_type == "testimonial" && advisorSlug == $advisorSlug && approved == true]
  | order(submittedAt desc) {
    _id,
    advisorSlug,
    clientName,
    clientTitle,
    heading,
    quote,
    rating,
    photo { "url": asset->url },
    submittedAt
  }
`
