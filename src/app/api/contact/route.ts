import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const INQUIRY_TYPES: Record<string, string> = {
  general: "General Inquiry",
  support: "Support",
  press: "Press",
  careers: "Careers",
  partnership: "Partnership",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, type, message, website } = body;

    // Honeypot spam check: bots often fill hidden 'website' field
    if (website && typeof website === "string" && website.trim() !== "") {
      return NextResponse.json({ success: true });
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim() === "") {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (
      !email ||
      typeof email !== "string" ||
      !email.includes("@") ||
      !email.includes(".") ||
      email.trim() === ""
    ) {
      return NextResponse.json({ error: "Valid email address is required" }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim() === "") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const inquiryTypeLabel = INQUIRY_TYPES[type] || type || "General Inquiry";
    const emailSubject = `[ALGORITHEC Contact] ${inquiryTypeLabel} from ${name.trim()}`;

    const emailText = `New contact form submission on ALGORITHEC (algorithec.com)

From: ${name.trim()} <${email.trim()}>
Inquiry Type: ${inquiryTypeLabel}

Message:
${message.trim()}

--------------------------------------------------
Sender Email: ${email.trim()}
Submitted At: ${new Date().toISOString()}
`;

    const emailHtml = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111111; line-height: 1.6;">
  <div style="border-bottom: 2px solid #7B0C1B; padding-bottom: 16px; margin-bottom: 24px;">
    <h2 style="margin: 0; color: #111111; font-size: 20px;">New Contact Form Submission</h2>
    <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 14px;">Received via algorithec.com</p>
  </div>
  
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
    <tr>
      <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 120px;"><strong>Name:</strong></td>
      <td style="padding: 8px 0; color: #111111; font-size: 14px;">${name.trim()}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #6b7280; font-size: 14px;"><strong>Email:</strong></td>
      <td style="padding: 8px 0; color: #111111; font-size: 14px;"><a href="mailto:${email.trim()}" style="color: #7B0C1B; text-decoration: underline;">${email.trim()}</a></td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #6b7280; font-size: 14px;"><strong>Inquiry Type:</strong></td>
      <td style="padding: 8px 0; color: #111111; font-size: 14px;">${inquiryTypeLabel}</td>
    </tr>
  </table>

  <div style="background-color: #F5F0E8; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
    <p style="margin: 0 0 8px 0; font-weight: 600; font-size: 14px; color: #111111;">Message:</p>
    <p style="margin: 0; font-size: 14px; color: #374151; white-space: pre-wrap;">${message.trim()}</p>
  </div>

  <p style="margin: 0; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb; padding-top: 16px;">
    To reply to the sender directly, simply reply to this email.
  </p>
</div>
`;

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.warn(
        "[Contact API Warning] SMTP credentials not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS in your deployment environment variables."
      );
      return NextResponse.json(
        {
          error:
            "Email service is currently offline. Please email us directly at info@algorithec.com.",
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"ALGORITHEC Contact" <${smtpUser}>`,
      to: "info@algorithec.com",
      replyTo: email.trim(),
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or email info@algorithec.com directly." },
      { status: 500 }
    );
  }
}
