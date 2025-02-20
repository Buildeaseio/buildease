import { NextResponse } from 'next/server';
import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log('Received form data:', formData);

    const { firstName, lastName, email, phone, company, builderType, annualRevenue } = formData;

    // Log the API key (but mask it for security)
    console.log('API Key present:', !!process.env.RESEND_API_KEY);
    
    const emailResult = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['buildeaseio@gmail.com'],
      subject: 'New BuildEase Demo Request',
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

    console.log('Email send result:', emailResult);

    if (emailResult.error) {
      console.error('Detailed email error:', emailResult.error);
      return NextResponse.json({ 
        error: emailResult.error,
        message: 'Failed to send email'
      }, { status: 400 });
    }

    return NextResponse.json({ 
      success: true,
      message: 'Demo request received successfully'
    });
  } catch (err) {
    console.error('Detailed server error:', err);
    return NextResponse.json({ 
      error: err instanceof Error ? err.message : 'Unknown error',
      details: err
    }, { status: 500 });
  }
}