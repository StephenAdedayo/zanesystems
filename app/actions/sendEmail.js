"use server"; // This tells Next.js to run this code ONLY on the server

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
  const { fullName, email, message } = formData;
  const userEmail = email.trim();
  try {
    const { data, error } = await resend.emails.send({
      from: `Zane Systems - ${fullName} <contact@zanesystemsgs.com>`,
      to: ["info@zanesystemsgs.com"],
      reply_to: userEmail,
      subject: `New Inquiry from ${fullName}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Inquiry</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
    .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
    .header { background-color: #14516e; padding: 30px 20px; text-align: center; }
    .header h1 { color: #ffffff; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 2px; }
    .content { padding: 40px 30px; line-height: 1.6; color: #323a40; }
    .meta-box { background-color: #eef2ff; border-left: 4px solid #4f46e5; padding: 15px; margin-bottom: 25px; border-radius: 4px; }
    .meta-item { margin-bottom: 8px; font-size: 14px; }
    .meta-label { font-weight: bold; color: #111827;  display: inline-block; }
    .message-title { font-weight: bold; color: #111827; margin-bottom: 10px; font-size: 16px; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px; }
    .message-text { white-space: pre-wrap; color: #374151; font-size: 15px; margin-bottom: 30px; }
    
    /* Button Wrapper */
    .btn-container { text-align: center; padding: 20px 0; border-top: 1px solid #e5e7eb; margin-top: 20px; }
    
    .footer { background-color: #0d151c; padding: 20px; text-align: center; color: #9ca3af; font-size: 12px; }
    @media only screen and (max-width: 600px) { .container { margin: 0; width: 100%; border-radius: 0; } .content { padding: 20px; } }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Zane Systems</h1>
    </div>
    <div class="content">
      <div class="meta-box">
        <div class="meta-item"><span class="meta-label">Name:</span> ${fullName}</div>
        <div class="meta-item"><span class="meta-label">Email:</span> ${email}</div>
      </div>
      
      <div class="message-title">Inquiry Message</div>
      <div class="message-text">${message}</div>

      <div class="btn-container">
        <a href="mailto:${email}?subject=Re: Your inquiry to Zane Systems" 
           style="background-color: #14516e; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; font-size: 14px;">
           Reply to ${fullName}
        </a>
        <p style="font-size: 11px; color: #9ca3af; margin-top: 12px;">Click above to open a direct reply window.</p>
      </div>
    </div>
    <div class="footer">
      &copy; ${new Date().getFullYear()} Zane Systems Limited. All rights reserved.
    </div>
  </div>
</body>
</html>
    `,
    });

    if (error) {
      console.error(error); // This helps you see the real error in your terminal
      return { success: false, error: error.message }; // Added success: false
    }

    return { success: true, data };
  } catch (err) {
    console.error(err);
    return { success: false, error: "System error, please try again." }; // Added success: false
  }
}
