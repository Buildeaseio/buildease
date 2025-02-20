import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Template for internal team notification
const teamEmailTemplate = (firstName: string, lastName: string, email: string, phone: string, company: string, builderType: string, annualRevenue: string) => `
  <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 20px; color: #1f2937; background-color: #ffffff;">
    <!-- Header -->
    <div style="background: #2286b9; color: white; padding: 24px; border-radius: 12px; margin-bottom: 24px;">
      <h1 style="margin: 0; font-size: 28px; font-weight: 600; text-align: center;">New Demo Request</h1>
      <p style="margin: 8px 0 0; text-align: center; opacity: 0.9;">Received on ${new Date().toLocaleString()}</p>
    </div>

    <!-- Contact Information -->
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
      <h2 style="color: #2286b9; font-size: 20px; margin: 0 0 16px; border-bottom: 2px solid #2286b9; padding-bottom: 8px;">
        Contact Details
      </h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; color: #374151; font-weight: 600; width: 140px;">Full Name:</td>
          <td style="padding: 8px 0;">${firstName} ${lastName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #374151; font-weight: 600;">Email:</td>
          <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2286b9;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #374151; font-weight: 600;">Phone:</td>
          <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #2286b9;">${phone}</a></td>
        </tr>
      </table>
    </div>

    <!-- Company Information -->
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
      <h2 style="color: #2286b9; font-size: 20px; margin: 0 0 16px; border-bottom: 2px solid #2286b9; padding-bottom: 8px;">
        Company Details
      </h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; color: #374151; font-weight: 600; width: 140px;">Company:</td>
          <td style="padding: 8px 0;">${company}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #374151; font-weight: 600;">Builder Type:</td>
          <td style="padding: 8px 0;">${builderType}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #374151; font-weight: 600;">Revenue:</td>
          <td style="padding: 8px 0;">${annualRevenue}</td>
        </tr>
      </table>
    </div>
  </div>
`;

// Template for user confirmation
const userEmailTemplate = (firstName: string) => `
  <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 20px; color: #1f2937; background-color: #ffffff;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 32px;">
      <img src="/buildease.png" alt="BuildEase" style="height: 48px; width: auto;" />
    </div>

    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 32px; text-align: center;">
      <h1 style="color: #2286b9; font-size: 24px; margin: 0 0 24px;">Thank You for Your Interest!</h1>
      
      <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6;">
        Hi ${firstName},
      </p>
      
      <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6;">
        Thank you for requesting a demo of BuildEase. We're excited to show you how our platform can transform your construction management process.
      </p>
      
      <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6;">
        Our team will review your information and reach out within 24-48 hours to schedule your personalized demo.
      </p>

      <div style="margin: 32px 0; padding: 16px; background: #2286b9; border-radius: 8px; color: white;">
        <p style="margin: 0; font-size: 16px;">
          "Streamline Your Operations with BuildEase"
        </p>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; margin-top: 32px; padding-top: 32px; border-top: 1px solid #e2e8f0;">
      <p style="color: #6b7280; font-size: 14px; margin: 0;">
        © ${new Date().getFullYear()} BuildEase. All rights reserved.
      </p>
    </div>
  </div>
`;

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { firstName, lastName, email, phone, company, builderType, annualRevenue } = formData;

    // Send notification to team
    const { error: teamError } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['buildeaseio@gmail.com'],
      subject: 'New BuildEase Demo Request',
      html: teamEmailTemplate(firstName, lastName, email, phone, company, builderType, annualRevenue)
    });

    // Send confirmation to user
    const { error: userError } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [email],
      subject: 'Thank You for Your Interest in BuildEase',
      html: userEmailTemplate(firstName)
    });

    if (teamError || userError) {
      console.error('Email error:', teamError || userError);
      return NextResponse.json({ error: 'Failed to send demo request' }, { status: 400 });
    }

    return NextResponse.json({ 
      success: true,
      message: 'Demo request received successfully'
    });
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json({ 
      error: 'Failed to process demo request. Please try again.' 
    }, { status: 500 });
  }
}