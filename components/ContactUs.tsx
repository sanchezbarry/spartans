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

export function ContactUs({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Fill in the form below to get in touch with us
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input id="name" type="text" placeholder="John Doe" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="m@example.com" required />
          <FieldDescription>
            We&apos;ll use this to contact you. We will not share your email
            with anyone else.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Message</FieldLabel>
          <Input id="text" type="text" required />
          <FieldDescription>
            Cannot be blank.
          </FieldDescription>
        </Field>

        <Field>
          <Button type="submit">Send Message</Button>
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
