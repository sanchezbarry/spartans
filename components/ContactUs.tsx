'use client';

import { useState } from 'react';
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactUs({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, message }),
    });

    if (res.ok) {
      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } else {
      setStatus('error');
    }
  }

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={handleSubmit}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Fill in the form below to get in touch with us
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input
            id="name"
            type="text"
            placeholder="John Tan"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FieldDescription>
            We&apos;ll use this to contact you. We will not share your email
            with anyone else.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
          <Input
            id="phone"
            type="tel"
            placeholder="+65 1234 5678"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Input
            id="message"
            type="text"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <FieldDescription>Cannot be blank.</FieldDescription>
        </Field>

        {status === 'success' && (
          <p className="text-sm text-center text-green-600">
            Message sent! We&apos;ll be in touch soon.
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm text-center text-red-500">
            Something went wrong. Please try again.
          </p>
        )}

        <Field>
          <Button type="submit" disabled={status === 'loading'} className="rounded-lg">
            {status === 'loading' ? 'Sending…' : 'Send Message'}
          </Button>
        </Field>
        <FieldSeparator>Or connect with us on</FieldSeparator>
        <Field>
          <FieldDescription className="px-6 text-center">
            Already know a SPARTANS advisor? Contact them directly.
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
