import { sendContactEmail } from "../../utils/sendContactEmail";

export async function POST(context: { request: Request }) {
  const { request } = context;
  const contentType = request.headers.get("content-type") || "";

  let name = "",
    email = "",
    message = "";

  if (contentType.includes("application/x-www-form-urlencoded")) {
    const rawBody = await request.text();
    const formData = new URLSearchParams(rawBody);

    name = formData.get("name") ?? "";
    email = formData.get("email") ?? "";
    message = formData.get("message") ?? "";
  } else {
    return new Response("Unsupported content type", { status: 400 });
  }

  try {
    await sendContactEmail({ name, email, message });

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/contact?success=true",
      },
    });
  } catch (err) {
    console.error("Email send failed:", err);

    if (import.meta.env.MODE === "development") {
      return new Response("Failed to send email: " + (err as Error).message, {
        status: 500,
      });
    }

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/contact?error=true",
      },
    });
  }
}
