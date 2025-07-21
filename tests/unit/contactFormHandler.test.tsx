import { vi, describe, it, expect, beforeEach } from "vitest";

let form: HTMLFormElement;
let buttonText: HTMLElement;
let spinner: HTMLElement;
let statusMessage: HTMLElement;

beforeEach(async () => {
  document.body.innerHTML = `
    <form id="contact-form">
      <input name="name" value="Test User" />
      <input name="email" value="test@example.com" />
      <textarea name="message">Hello!</textarea>
      <button><span id="button-text">Send Message</span><span id="spinner" class="hidden"></span></button>
    </form>
    <div id="status-message"></div>
  `;

  form = document.getElementById("contact-form") as HTMLFormElement;
  buttonText = document.getElementById("button-text")!;
  spinner = document.getElementById("spinner")!;
  statusMessage = document.getElementById("status-message")!;

  vi.resetModules();
  await import("../../src/scripts/contactFormHandler");
});

describe("contactFormHandler", () => {
  it("displays 'Send Message' on the submit button before submission", async () => {
    expect(buttonText.textContent).toBe("Send Message");
  });

  it("sends form and redirects on success", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          redirected: true,
          url: "https://example.com/thank-you",
        }),
      ) as any,
    );
    const locationSpy = vi.spyOn(window, "location", "get");
    const hrefSpy = vi.fn();
    locationSpy.mockReturnValue({
      set href(value: string) {
        hrefSpy(value);
      },
    } as any);

    form.dispatchEvent(
      new SubmitEvent("submit", { bubbles: true, cancelable: true }),
    );
    await new Promise((r) => setTimeout(r, 10));
    expect(hrefSpy).toHaveBeenCalledWith("https://example.com/thank-you");
  });

  it("shows error message when fetch fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() => Promise.reject(new Error("network error"))) as any,
    );
    form.dispatchEvent(
      new SubmitEvent("submit", { bubbles: true, cancelable: true }),
    );
    await new Promise((r) => setTimeout(r, 10));
    expect(statusMessage.textContent).toMatch(/something went wrong/i);
  });

  it("shows error message when response is not redirected", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() => Promise.resolve({ redirected: false }) as any),
    );
    form.dispatchEvent(
      new SubmitEvent("submit", { bubbles: true, cancelable: true }),
    );
    await new Promise((r) => setTimeout(r, 10));
    expect(statusMessage.textContent).toMatch(/something went wrong/i);
  });

  it("shows the spinner when the form is submitted", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          redirected: true,
          url: "https://example.com/thank-you",
        }),
      ) as any,
    );

    form.dispatchEvent(
      new SubmitEvent("submit", { bubbles: true, cancelable: true }),
    );

    expect(spinner.classList.contains("hidden")).toBe(false);
  });
});
