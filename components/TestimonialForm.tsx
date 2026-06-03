'use client'

import { useRef, useState } from 'react'
import { Star, Upload, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'

type Status = 'idle' | 'loading' | 'success' | 'error'

interface Props {
  advisorSlug: string
  advisorName: string
}

async function compressImage(file: File, maxPx = 800, quality = 0.75): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const url = URL.createObjectURL(file)
    img.onload = () => {
      URL.revokeObjectURL(url)
      const scale = Math.min(1, maxPx / Math.max(img.width, img.height))
      const w = Math.round(img.width * scale)
      const h = Math.round(img.height * scale)
      const canvas = document.createElement('canvas')
      canvas.width = w
      canvas.height = h
      canvas.getContext('2d')!.drawImage(img, 0, 0, w, h)
      canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error('Compression failed')), 'image/jpeg', quality)
    }
    img.onerror = reject
    img.src = url
  })
}

export function TestimonialForm({ advisorSlug, advisorName }: Props) {
  const [clientName, setClientName] = useState('')
  const [clientTitle, setClientTitle] = useState('')
  const [heading, setHeading] = useState('')
  const [quote, setQuote] = useState('')
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [photo, setPhoto] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [status, setStatus] = useState<Status>('idle')
  const fileRef = useRef<HTMLInputElement>(null)

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setPhoto(file)
    setPhotoPreview(URL.createObjectURL(file))
  }

  function removePhoto() {
    setPhoto(null)
    if (photoPreview) URL.revokeObjectURL(photoPreview)
    setPhotoPreview(null)
    if (fileRef.current) fileRef.current.value = ''
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData()
    formData.append('advisorSlug', advisorSlug)
    formData.append('clientName', clientName)
    formData.append('clientTitle', clientTitle)
    formData.append('heading', heading)
    formData.append('quote', quote)
    if (rating) formData.append('rating', String(rating))

    if (photo) {
      const compressed = await compressImage(photo)
      formData.append('photo', compressed, 'photo.jpg')
    }

    const res = await fetch('/api/testimonials', {
      method: 'POST',
      body: formData,
    })

    if (res.ok) {
      setStatus('success')
      setClientName('')
      setClientTitle('')
      setHeading('')
      setQuote('')
      setRating(0)
      removePhoto()
    } else {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
        <p className="cinzel text-lg mb-2 text-primary">Thank you!</p>
        <p className="text-sm text-muted-foreground">
          Your testimonial for {advisorName} has been submitted and is pending review.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="clientName">Your Full Name</FieldLabel>
          <Input
            id="clientName"
            type="text"
            placeholder="Jane Doe"
            required
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="clientTitle">Job Title / Occupation</FieldLabel>
          <Input
            id="clientTitle"
            type="text"
            placeholder="e.g. Software Engineer"
            value={clientTitle}
            onChange={(e) => setClientTitle(e.target.value)}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="heading">
            Heading <span className="text-muted-foreground font-normal">(optional)</span>
          </FieldLabel>
          <Input
            id="heading"
            type="text"
            placeholder="e.g. Life-changing advice"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="quote">Your Testimonial</FieldLabel>
          <textarea
            id="quote"
            required
            rows={4}
            placeholder={`Share your experience with ${advisorName}…`}
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
          />
          <FieldDescription>Cannot be blank.</FieldDescription>
        </Field>

        {/* Star rating */}
        <Field>
          <FieldLabel>Rating</FieldLabel>
          <div className="flex gap-1" role="group" aria-label="Rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHovered(star)}
                onMouseLeave={() => setHovered(0)}
                aria-label={`${star} star${star !== 1 ? 's' : ''}`}
                className="p-0.5 transition-transform hover:scale-110"
              >
                <Star
                  className="w-6 h-6 transition-colors"
                  fill={(hovered || rating) >= star ? 'currentColor' : 'none'}
                  color={(hovered || rating) >= star ? 'var(--color-primary)' : 'currentColor'}
                />
              </button>
            ))}
          </div>
        </Field>

        {/* Photo upload */}
        <Field>
          <FieldLabel>
            Photo <span className="text-muted-foreground font-normal">(optional)</span>
          </FieldLabel>
          {photoPreview ? (
            <div className="flex items-center gap-4">
              <img
                src={photoPreview}
                alt="Preview"
                className="w-16 h-16 rounded-full object-cover border border-border"
              />
              <button
                type="button"
                onClick={removePhoto}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
                Remove
              </button>
            </div>
          ) : (
            <label className="flex items-center gap-3 w-fit cursor-pointer px-4 py-2.5 rounded-md border border-input bg-background hover:bg-muted transition-colors text-sm text-muted-foreground">
              <Upload className="w-4 h-4" />
              Upload photo
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={handlePhotoChange}
              />
            </label>
          )}
          <FieldDescription>JPG, PNG or WebP. Will be compressed automatically.</FieldDescription>
        </Field>

        {status === 'error' && (
          <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
        )}

        <Field>
          <Button type="submit" disabled={status === 'loading'} className="rounded-lg">
            {status === 'loading' ? 'Submitting…' : 'Submit Testimonial'}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
