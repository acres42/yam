/** @jsxImportSource preact */
import { useContactForm } from "../hooks/useContactForm";
import type { JSX } from "preact";

const ContactForm = (): JSX.Element => {
  const {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    status,
    handleSubmit,
  } = useContactForm();

  const handleInput =
    // eslint-disable-next-line no-unused-vars
    (setter: (value: string) => void) =>
      (e: JSX.TargetedEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setter(e.currentTarget.value);
      };

  return (
    <form
      onSubmit={handleSubmit}
      class="mx-auto mb-4 w-full max-w-2xl rounded bg-accent p-6 text-black"
      aria-labelledby="contact-form-heading"
    >
      <h3
        id="contact-form-heading"
        class="mb-4 text-center text-xl font-bold text-black"
      >
        Email Us
      </h3>

      <div aria-live="polite">
        {status === "success" && (
          <div class="mb-4 rounded bg-green-100 px-4 py-2 text-sm text-green-800">
            Your message was sent successfully!
          </div>
        )}

        {status === "error" && (
          <div class="mb-4 rounded bg-red-100 px-4 py-2 text-sm text-red-800">
            Something went wrong. Please try again or call us directly.
          </div>
        )}
      </div>

      <label for="name" class="mb-1 block text-sm font-semibold">
        Your Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        required
        class="mb-4 w-full rounded border border-gray-300 p-2 text-sm"
        value={name}
        onInput={handleInput(setName)}
      />

      <label for="email" class="mb-1 block text-sm font-semibold">
        Your Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        class="mb-4 w-full rounded border border-gray-300 p-2 text-sm"
        value={email}
        onInput={handleInput(setEmail)}
      />

      <label for="message" class="mb-1 block text-sm font-semibold">
        Your Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={5}
        required
        class="mb-4 w-full rounded border border-gray-300 p-2 text-sm"
        value={message}
        onInput={handleInput(setMessage)}
      ></textarea>

      <button
        type="submit"
        class="flex w-full items-center justify-center rounded bg-secondary px-4 py-2 font-semibold text-white transition hover:bg-primary"
      >
        <span>Send Message</span>
      </button>
    </form>
  );
};

export default ContactForm;
