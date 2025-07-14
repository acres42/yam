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

  return await resend.emails.send({
    from: "Contact Form <hello@youngadultmedicine.com>",
    to: "contact@youngadultmedicine.com",
    subject: `New Contact Form Submission from ${name}`,
    replyTo: email,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  });
}
