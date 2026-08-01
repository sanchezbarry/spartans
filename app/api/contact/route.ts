import emailjs from '@emailjs/nodejs';
import { NextRequest } from 'next/server';

emailjs.init({
  publicKey: process.env.EMAILJS_PUBLIC_KEY,
  privateKey: process.env.EMAILJS_PRIVATE_KEY,
});

export async function POST(request: NextRequest) {
  const { name, email, phone, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: 'All fields are required.' }, { status: 400 });
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
