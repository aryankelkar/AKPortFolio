import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Strict validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "A valid name (at least 2 characters) is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must contain at least 10 characters." },
        { status: 400 }
      );
    }

    // In a production environment with RESEND_API_KEY or SENDGRID_API_KEY configured,
    // you would dispatch the email here:
    // if (process.env.RESEND_API_KEY) { await resend.emails.send(...) }

    // Generate verified mailto fallback URL
    const mailtoUrl = `mailto:aryan.kelkar@example.com?subject=${encodeURIComponent(
      subject ? `[Portfolio Inquiry] ${subject}` : `[Portfolio Inquiry] Message from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    return NextResponse.json({
      success: true,
      message:
        "Your message has been processed successfully. You can also open your mail client directly.",
      mailtoUrl,
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
