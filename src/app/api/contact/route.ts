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
    const { name, email, type, message } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim() === "") {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.includes("@") || email.trim() === "") {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim() === "") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const inquiryTypeLabel = INQUIRY_TYPES[type] || type || "General Inquiry";

    const emailSubject = "New Contact Form Submission — ALGORITHEC";
    const emailBody = `New message received from the ALGORITHEC website.

Name:
${name.trim()}

Email:
${email.trim()}

Inquiry Type:
${inquiryTypeLabel}

Message:
${message.trim()}`;

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpSecure = process.env.SMTP_SECURE === "true";

    if (smtpHost && smtpUser) {
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
        text: emailBody,
      });
    } else {
      // Clean server log fallback when SMTP credentials are not configured in environment
      console.log("--- Contact Form Submission Received ---");
      console.log(`To: info@algorithec.com`);
      console.log(`Subject: ${emailSubject}`);
      console.log(`Reply-To: ${email.trim()}`);
      console.log(emailBody);
      console.log("----------------------------------------");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
