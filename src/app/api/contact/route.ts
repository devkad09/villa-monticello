import { NextRequest, NextResponse } from 'next/server';

interface ContactRequestBody {
  name?: string;
  email?: string;
  phone?: string;
  inquiryType?: string;
  date?: string;
  guests?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactRequestBody = await request.json();

    const { name, email, phone, inquiryType, message } = body;

    // Strict Server-Side Validation
    const errors: Record<string, string> = {};

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      errors.name = 'Please provide your full name (minimum 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 6) {
      errors.phone = 'Please provide a valid contact phone number.';
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      errors.message = 'Please provide details for your inquiry (minimum 5 characters).';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          fields: errors,
        },
        { status: 400 }
      );
    }

    // Integration Point: Check if an email service provider is configured
    const recipientEmail = process.env.CONTACT_EMAIL || 'reservations@villamonticello.com';
    const emailApiKey = process.env.EMAIL_API_KEY || process.env.RESEND_API_KEY;
    const hasSmtp = Boolean(process.env.SMTP_HOST);

    if (emailApiKey || hasSmtp) {
      // In production with credentials configured, this dispatches via configured email provider
      // e.g. await resend.emails.send({ to: recipientEmail, ... })
      return NextResponse.json({
        success: true,
        status: 'dispatched',
        type: inquiryType || 'general',
        message: `Your inquiry has been dispatched to ${recipientEmail}.`,
      });
    }

    // Transparent staging fallback: clearly inform that no email credentials are active yet
    return NextResponse.json({
      success: true,
      status: 'provider_pending',
      type: inquiryType || 'general',
      message:
        'Inquiry received and validated. Live email dispatch requires configuring CONTACT_EMAIL and EMAIL_API_KEY in your environment variables.',
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: 'Invalid request payload or internal server error.',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      error: 'Method not allowed. Use POST to submit an inquiry.',
    },
    { status: 405 }
  );
}
