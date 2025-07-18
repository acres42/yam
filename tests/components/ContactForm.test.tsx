import { render, screen } from "@testing-library/preact";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import ContactForm from "@/components/ContactForm";

describe("ContactForm", () => {
  it("renders all fields and a submit button", async () => {
    render(<ContactForm />);
    expect(await screen.findByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
  });

  it("allows user to fill and submit the form", async () => {
    render(<ContactForm />);

    await userEvent.type(screen.getByLabelText(/name/i), "Test User");
    await userEvent.type(screen.getByLabelText(/email/i), "test@example.com");
    await userEvent.type(
      screen.getByLabelText(/message/i),
      "This is a test message.",
    );

    const submitButton = screen.getByRole("button", { name: /send/i });

    global.fetch = vi.fn(() =>
      Promise.resolve({ ok: true, status: 302 }),
    ) as unknown as typeof fetch;

    await userEvent.click(submitButton);

    expect(fetch).toHaveBeenCalledWith(
      "/api/contact",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Test User",
          email: "test@example.com",
          message: "This is a test message.",
        }),
      }),
    );
  });
});
