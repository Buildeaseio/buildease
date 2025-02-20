import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    const { firstName, lastName, email, phone, company, builderType, annualRevenue } = formData;

    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['buildeaseio@gmail.com'],
      subject: 'New Demo Request',
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Builder Type:</strong> ${builderType}</p>
        <p><strong>Annual Revenue:</strong> ${annualRevenue}</p>
      `
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Failed to send email:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
} 