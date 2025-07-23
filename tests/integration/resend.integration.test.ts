import { describe, it, expect, beforeEach, vi } from "vitest";

export const mockSendEmail = vi.fn();

vi.mock("@/lib/resend", () => {
  const scenario = process.env.RESEND_MOCK_SCENARIO;

  if (scenario === "error") {
    mockSendEmail.mockRejectedValueOnce(new Error("Simulated Resend failure"));
  } else {
    mockSendEmail.mockResolvedValue({
      data: { id: "mock-email-id" },
      error: null,
    });
  }

  return {
    default: {
      emails: {
        send: mockSendEmail,
      },
    },
  };
});

describe("Resend integration", () => {
  beforeEach(() => {
    process.env.RESEND_MOCK_SCENARIO = "success"; // or default
    mockSendEmail.mockReset();
  });

  it("sends an email with valid data", async () => {
    mockSendEmail.mockResolvedValueOnce({
      data: { id: "mock-email-id" },
      error: null,
    });

    const { default: resendClient } = await import("@/lib/resend");

    const result = await resendClient.emails.send({
      from: "hello@youngadultmedicine.com",
      to: "youngadultmedicine@gmail.com",
      subject: "Test Email",
      html: "<p>This is a test email.</p>",
      text: "This is a test email.",
    });

    expect(result.data?.id).toBe("mock-email-id");
    expect(result.error).toBeNull();
  });

  it("fails when required fields are missing", async () => {
    mockSendEmail.mockResolvedValueOnce({
      data: null,
      error: {
        statusCode: 422,
        error: "Missing required fields",
      },
    });

    const { default: resendClient } = await import("@/lib/resend");

    const result = await resendClient.emails.send({
      subject: "Missing from/to",
    } as any);

    expect(result.data).toBeNull();
    expect(result.error?.statusCode).toBe(422);
    expect(result.error?.error).toMatch(/missing/i);
  });
});
