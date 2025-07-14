import { Resend } from "resend";

const resendApiKey = import.meta.env.RESEND_API_KEY;
const resend = new Resend(resendApiKey);

export async function sendContactEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  if (!resendApiKey) throw new Error("Resend API key not set.");

  const emailPayload = {
    from: "Contact Form <hello@youngadultmedicine.com>",
    to: "youngadultmedicine@gmail.com",
    subject: `New Contact Form Submission from ${name}`,
    replyTo: email,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  console.log("📤 Sending email with payload:", emailPayload);

  try {
    const result = await resend.emails.send(emailPayload);
    console.log("✅ Email sent successfully:", result);
    return result;
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    throw error;
  }
}
