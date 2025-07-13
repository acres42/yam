import { sendContactEmail } from "@/utils/sendContactEmail";

export const config = {
  runtime: "edge",
};

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = formData.get("name")?.toString() ?? "";
  const email = formData.get("email")?.toString() ?? "";
  const message = formData.get("message")?.toString() ?? "";

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

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/contact?error=true",
      },
    });
  }
}
