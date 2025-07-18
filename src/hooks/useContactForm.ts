/** @jsxImportSource preact */
import { useState } from "preact/hooks";

export function useContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: Event) {
    e.preventDefault();

    try {
      console.log("📨 Submitting form", { name, email, message });
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.redirected) {
        // ✅ Redirect the browser manually
        window.location.href = res.url;
        return;
      }

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("❌ Contact form error:", err);
      setStatus("error");
    }
  }

  return {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    status,
    handleSubmit,
  };
}
