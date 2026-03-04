"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASSWORD,
  },
});

export async function sendEmail(formData) {
  const { fullName, email, message } = formData;
  const userEmail = email.trim();

  try {
    await Promise.all([
      // 1. Notify you
      transporter.sendMail({
        from: `"Zane Systems" <${process.env.ZOHO_USER}>`,
        to: process.env.ZOHO_USER,
        replyTo: userEmail,
        subject: `New Inquiry from ${fullName}`,
        html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .header { background-color: #14516e; padding: 30px 20px; text-align: center; }
    .header h1 { color: #ffffff; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 2px; }
    .content { padding: 40px 30px; line-height: 1.6; color: #323a40; }
    .meta-box { background-color: #eef2ff; border-left: 4px solid #4f46e5; padding: 15px; margin-bottom: 25px; border-radius: 4px; }
    .meta-item { margin-bottom: 8px; font-size: 14px; }
    .meta-label { font-weight: bold; color: #111827; display: inline-block; }
    .message-title { font-weight: bold; color: #111827; margin-bottom: 10px; font-size: 16px; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px; }
    .message-text { white-space: pre-wrap; color: #374151; font-size: 15px; margin-bottom: 30px; }
    .btn-container { text-align: center; padding: 20px 0; border-top: 1px solid #e5e7eb; margin-top: 20px; }
    .footer { background-color: #0d151c; padding: 20px; text-align: center; color: #9ca3af; font-size: 12px; }
    @media only screen and (max-width: 600px) { .container { margin: 0; width: 100%; border-radius: 0; } .content { padding: 20px; } }
  </style>
</head>
<body>
  <div class="container">
    <div class="header"><h1>New Website Inquiry</h1></div>
    <div class="content">
      <div class="meta-box">
        <div class="meta-item"><span class="meta-label">Name: </span>${" "}${fullName}</div>
        <div class="meta-item"><span class="meta-label">Email: </span>${" "}${userEmail}</div>
      </div>
      <div class="message-title">Inquiry Message</div>
      <div class="message-text">${message}</div>
      <div class="btn-container">
        <a href="mailto:${userEmail}?subject=Re: Your inquiry to Zane Systems"
           style="background-color: #14516e; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; font-size: 14px;">
           Reply to ${fullName}
        </a>
      </div>
    </div>
    <div class="footer">&copy; ${new Date().getFullYear()} Zane Systems Limited. All rights reserved.</div>
  </div>
</body>
</html>`
      }),

      // 2. Auto-reply to client
      transporter.sendMail({
        from: `"Zane Systems" <${process.env.ZOHO_USER}>`,
        to: userEmail,
        replyTo: process.env.ZOHO_USER,
        subject: "We've received your inquiry — Zane Systems",
        html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: 'Segoe UI', Tahoma, sans-serif; background-color: #f3f4f6; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e5e7eb; }
    .header { background-color: #14516e; padding: 25px; text-align: center; }
    .header h1 { color: #ffffff; margin: 0; font-size: 18px; text-transform: uppercase; letter-spacing: 2px; }
    .content { padding: 40px 30px; line-height: 1.7; color: #374151; }
    .greeting { font-size: 18px; font-weight: bold; color: #111827; margin-bottom: 20px; }
    .status-badge { display: inline-block; background-color: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600; margin-bottom: 20px; }
    .highlight { color: #14516e; font-weight: 600; }
    .footer { background-color: #0d151c; padding: 20px; text-align: center; color: #9ca3af; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header"><h1>Zane Systems</h1></div>
    <div class="content">
      <div class="status-badge">✓ Message Received</div>
      <div class="greeting">Hello ${fullName},</div>
      <p>Thank you for reaching out to <span class="highlight">Zane Systems Limited</span>.</p>
      <p>We have successfully received your inquiry and our team is currently reviewing the details you provided.</p>
      <p>We will get back to you within <strong>24 to 48 hours</strong>.</p>
      <br>
      <p>Best Regards,<br><strong>Operations Team</strong><br>Zane Systems Limited</p>
    </div>
    <div class="footer">
      &copy; ${new Date().getFullYear()} Zane Systems Limited. All rights reserved.<br>
      <span style="font-size:11px;">This is an automated message — please do not reply directly to this email.</span>
    </div>
  </div>
</body>
</html>`
      })
    ]);

    return { success: true };

  } catch (err) {
    console.error("Email Error:", err);
    return { success: false, error: "Failed to send email. Please try again." };
  }
}