import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Check for API key before initializing Resend
if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, company, builderType, annualRevenue } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Send notification to BuildEase team
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['buildeaseio@gmail.com'],
      subject: 'BuildEase Waitlist Signup',
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Builder Type:</strong> ${builderType}</p>
        <p><strong>Annual Revenue:</strong> ${annualRevenue}</p>
      `,
    });

    // Send confirmation to user
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [email],
      subject: 'Welcome to BuildEase Waitlist!',
      html: `
        <div>
          <h1>Welcome to BuildEase!</h1>
          <p>Hi ${firstName},</p>
          <p>Thank you for joining our waitlist. We're excited to have you on board!</p>
          <p>We'll keep you updated on our progress and let you know when we launch.</p>
          <p>Best regards,</p>
          <p>The BuildEase Team</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Failed to process request. Please try again.' },
      { status: 500 }
    );
  }
} 