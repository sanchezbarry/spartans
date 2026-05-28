'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
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

export function TestimonialForm({ advisorSlug, advisorName }: Props) {
  const [clientName, setClientName] = useState('')
  const [clientTitle, setClientTitle] = useState('')
  const [heading, setHeading] = useState('')
  const [quote, setQuote] = useState('')
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    const res = await fetch('/api/testimonials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ advisorSlug, clientName, clientTitle, heading, quote, rating }),
    })

    if (res.ok) {
      setStatus('success')
      setClientName('')
      setClientTitle('')
      setHeading('')
      setQuote('')
      setRating(0)
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
          <FieldLabel htmlFor="heading">Heading <span className="text-muted-foreground font-normal">(optional)</span></FieldLabel>
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

        {status === 'error' && (
          <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
        )}

        <Field>
          <Button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Submitting…' : 'Submit Testimonial'}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
