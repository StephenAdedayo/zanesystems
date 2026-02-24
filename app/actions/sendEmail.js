"use server" // This tells Next.js to run this code ONLY on the server

import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
  const { fullName, email, message } = formData;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Zane Systems <info@zanesystemsgs.com>', 
      to: ["info@zanesystemsgs.com"],
      reply_to: email,
     subject: `New Inquiry from ${fullName}`,  
      html: `<p>Name: ${fullName}</p><p>Email: ${email}</p><p>Message: ${message}</p>` 
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