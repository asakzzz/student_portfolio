import { EmailTemplate } from '../../../components/email-template';
import * as React from 'react';
import { Resend } from 'resend';


console.log('MODULE LOADED'); // for debug cause form sucks

const token = process.env.TOKEN
const resend = new Resend(token);

export async function POST(request: Request) {
  console.log('POST HIT');
  const { email, message } = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from:'onboarding@resend.dev',
      to: ['leogirard553@gmail.com'],
      subject: 'business',
      react: React.createElement(EmailTemplate, { email, message })
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (err: any) {
    console.error('CATCH BLOCK full:', err.message);
    return Response.json({ err }, { status: 500 });
  }
}