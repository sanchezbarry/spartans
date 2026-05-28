import { Resend } from 'resend';
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email, phone, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: 'All fields are required.' }, { status: 400 });
  }

  const phoneRow = phone ? `<p><strong>Phone:</strong> ${phone}</p>` : '';

  const { error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'dovansonquah@gmail.com',
    subject: `New contact form submission from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phoneRow}
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  if (error) {
    return Response.json({ error: 'Failed to send email.' }, { status: 500 });
  }

  return Response.json({ success: true });
}
