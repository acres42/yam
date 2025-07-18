import { describe, it, expect, vi, beforeEach } from "vitest";

function createRequest(body: unknown, contentType = "application/json") {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": contentType },
    body:
      contentType === "application/json"
        ? JSON.stringify(body)
        : (body as string),
  });
}

describe("POST /api/contact", () => {
  let mockSend: ReturnType<typeof vi.fn>;
  let mockResend: any;

  beforeEach(() => {
    mockSend = vi.fn();
    mockResend = { emails: { send: mockSend } };
  });

  it("sends contact form data and returns a redirect on success", async () => {
    const { POST } = await import("../../src/pages/api/contact");
    mockSend.mockResolvedValueOnce({});

    const req = createRequest({
      name: "Test User",
      email: "test@example.com",
      message: "Hello from the test suite!",
    });

    const res = await POST({ request: req }, { resend: mockResend });
    expect(res.status).toBe(302);
    expect(res.headers.get("location")).toBe("/contact?contact=success");
  });

  it("returns 400 if required fields are missing", async () => {
    const { POST } = await import("../../src/pages/api/contact");
    const req = createRequest({});
    const res = await POST({ request: req }, { resend: mockResend });
    expect(res.status).toBe(400);
  });

  it("returns 400 for invalid email format", async () => {
    const { POST } = await import("../../src/pages/api/contact");
    const req = createRequest({
      name: "User",
      email: "bademail",
      message: "hi",
    });
    const res = await POST({ request: req }, { resend: mockResend });
    expect(res.status).toBe(400);
  });

  it("strips out HTML from input to prevent XSS", async () => {
    const { POST } = await import("../../src/pages/api/contact");
    mockSend.mockResolvedValueOnce({});

    const req = createRequest({
      name: "<b>Bad</b>",
      email: "safe@example.com",
      message: "<script>alert('xss')</script>",
    });

    const res = await POST({ request: req }, { resend: mockResend });
    expect(res.status).toBe(302);
    expect(res.headers.get("location")).toBe("/contact?contact=success");
  });

  it("returns 400 for unsupported content type", async () => {
    const { POST } = await import("../../src/pages/api/contact");
    const req = createRequest(
      "name=Test&email=test@example.com&message=Hi",
      "text/plain",
    );
    const res = await POST({ request: req }, { resend: mockResend });
    expect(res.status).toBe(400);
  });

  it("returns redirect to error on Resend failure", async () => {
    const { POST } = await import("../../src/pages/api/contact");
    mockSend.mockResolvedValueOnce({ error: "Simulated Resend failure" });

    const req = createRequest({
      name: "Sad Tester",
      email: "sad@test.com",
      message: "This should simulate a failed email.",
    });

    const res = await POST({ request: req }, { resend: mockResend });
    expect(res.status).toBe(302);
    expect(res.headers.get("location")).toBe("/contact?contact=error");
  });
});
