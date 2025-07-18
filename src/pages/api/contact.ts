import { Resend } from "resend";

export async function POST(
  { request }: { request: Request },
  deps = { resend: new Resend(process.env.RESEND_API_KEY) },
) {
  console.log("🚀 API hit");
  const { resend } = deps;

  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return new Response("Unsupported Content Type", { status: 400 });
  }

  const { name, email, message } = await request.json();

  if (process.env.NODE_ENV !== "production") {
    console.log("📩 Incoming contact POST:", { name, email, message });
  }

  if (!name || !email || !message || !email.includes("@")) {
    return new Response("Bad Request", { status: 400 });
  }

  const cleanName = name.replace(/<[^>]*>/g, "");
  const cleanMessage = message.replace(/<[^>]*>/g, "");

  if (process.env.NODE_ENV !== "production") {
    console.log("🧼 Cleaned input:", {
      cleanName,
      email,
      cleanMessage,
    });
  }

  const result = await resend.emails.send({
    from: "Contact Form <hello@youngadultmedicine.com>",
    to: "youngadultmedicine@gmail.com",
    subject: `New contact from ${cleanName}`,
    replyTo: email,
    text: cleanMessage,
  });

  if (process.env.NODE_ENV !== "production") {
    console.log("📤 Resend result:", result);
  }

  if (result.error) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/contact?contact=error",
      },
    });
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: "/contact?contact=success",
    },
  });
}
