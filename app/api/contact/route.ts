import emailjs from '@emailjs/nodejs';
import { NextRequest } from 'next/server';

emailjs.init({
  publicKey: process.env.EMAILJS_PUBLIC_KEY,
  privateKey: process.env.EMAILJS_PRIVATE_KEY,
});

const RECAPTCHA_SCORE_THRESHOLD = 0.5;

async function verifyRecaptcha(token: string) {
  const params = new URLSearchParams({
    secret: process.env.RECAPTCHA_SECRET_KEY!,
    response: token,
  });

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params,
  });

  const data = await res.json();

  return (
    data.success === true &&
    data.action === 'contact_form' &&
    data.score >= RECAPTCHA_SCORE_THRESHOLD
  );
}

export async function POST(request: NextRequest) {
  const { name, email, phone, message, recaptchaToken } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: 'All fields are required.' }, { status: 400 });
  }

  if (!recaptchaToken || !(await verifyRecaptcha(recaptchaToken))) {
    return Response.json({ error: 'reCAPTCHA verification failed.' }, { status: 400 });
  }

  try {
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      {
        name,
        email,
        phone: phone || 'Not provided',
        message,
      }
    );
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed to send email.' }, { status: 500 });
  }

  return Response.json({ success: true });
}
