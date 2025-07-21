import { resend } from "@/lib/resend";

export async function sendContactEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
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
    return result;
  } catch (err: any) {
    return {
      data: null,
      error: {
        message: err.message,
        name: err.name ?? "unexpected_error",
        statusCode: err.statusCode ?? 500,
      },
    };
  }
}
