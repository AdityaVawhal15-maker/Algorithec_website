import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, honeypot } = body;

    // Honeypot spam check: bots often fill hidden fields
    if (honeypot && typeof honeypot === "string" && honeypot.trim() !== "") {
      // Return success to bots so they don't retry
      return NextResponse.json({ success: true });
    }

    // Server-side email validation
    if (
      !email ||
      typeof email !== "string" ||
      email.trim() === "" ||
      !email.includes("@") ||
      !email.includes(".") ||
      email.trim().length > 254
    ) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    // Reject obviously malformed emails (no text before @, no TLD after dot)
    const emailParts = cleanEmail.split("@");
    if (
      emailParts.length !== 2 ||
      emailParts[0].length === 0 ||
      !emailParts[1].includes(".") ||
      emailParts[1].split(".").pop()!.length < 2
    ) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.warn(
        "[Waitlist API Warning] SMTP credentials not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS in your deployment environment variables."
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

    const submittedAt = new Date().toISOString();

    const emailText = `New Algorithec Waitlist Signup

A new user joined the Algorithec waitlist.

Email: ${cleanEmail}
Date/Time: ${submittedAt}
`;

    const emailHtml = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111111; line-height: 1.6;">
  <div style="border-bottom: 2px solid #111111; padding-bottom: 16px; margin-bottom: 24px;">
    <h2 style="margin: 0; color: #111111; font-size: 20px;">New Waitlist Signup</h2>
    <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 14px;">Received via algorithec.com</p>
  </div>

  <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
    <tr>
      <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 120px;"><strong>Email:</strong></td>
      <td style="padding: 8px 0; color: #111111; font-size: 14px;"><a href="mailto:${cleanEmail}" style="color: #111111; text-decoration: underline;">${cleanEmail}</a></td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #6b7280; font-size: 14px;"><strong>Date/Time:</strong></td>
      <td style="padding: 8px 0; color: #111111; font-size: 14px;">${submittedAt}</td>
    </tr>
  </table>

  <p style="margin: 0; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb; padding-top: 16px;">
    Sent automatically from the Algorithec waitlist form.
  </p>
</div>
`;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"ALGORITHEC" <${smtpUser}>`,
      to: "info@algorithec.com",
      subject: "New Algorithec Waitlist Signup",
      text: emailText,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Waitlist API] Error processing waitlist submission:", error);
    return NextResponse.json(
      {
        error:
          "Failed to join the waitlist. Please try again or email info@algorithec.com directly.",
      },
      { status: 500 }
    );
  }
}
