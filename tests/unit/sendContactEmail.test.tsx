import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/resend", () => {
  return {
    resend: {
      emails: {
        send: vi.fn(),
      },
    },
  };
});

const resendModule =
  await vi.importMock<typeof import("@/lib/resend")>("@/lib/resend");
const mockedSend = resendModule.resend.emails.send as ReturnType<typeof vi.fn>;

import { sendContactEmail } from "@/utils/sendContactEmail";

describe("sendContactEmail", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("sends an email with valid input", async () => {
    mockedSend.mockResolvedValueOnce({
      data: { id: "mocked-id" },
      error: null,
    });

    const result = await sendContactEmail({
      name: "Jane Test",
      email: "jane@example.com",
      message: "Hello from the integration test",
    });

    expect(mockedSend).toHaveBeenCalledWith(
      expect.objectContaining({
        to: "youngadultmedicine@gmail.com",
        from: "Contact Form <hello@youngadultmedicine.com>",
        replyTo: "jane@example.com",
        subject: "New Contact Form Submission from Jane Test",
        text: expect.stringContaining("Jane Test"),
      }),
    );
    expect(mockedSend).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      data: { id: "mocked-id" },
      error: null,
    });
  });

  it("returns error when Resend fails", async () => {
    mockedSend.mockImplementationOnce(async () => ({
      data: null,
      error: {
        message: "Resend exploded",
        name: "resend_error",
        statusCode: 500,
      },
    }));

    const result = await sendContactEmail({
      name: "Fail Case",
      email: "fail@example.com",
      message: "This will fail",
    });

    expect(result).toEqual({
      data: null,
      error: {
        message: "Resend exploded",
        name: "resend_error",
        statusCode: 500,
      },
    });
  });

  it("handles unexpected exceptions gracefully", async () => {
    mockedSend.mockRejectedValueOnce(
      new Error("Too many requests. You can only make 2 requests per second."),
    );

    const result = await sendContactEmail({
      name: "Oops",
      email: "oops@example.com",
      message: "Something broke",
    });

    expect(result).toEqual({
      data: null,
      error: {
        message: "Too many requests. You can only make 2 requests per second.",
        name: "Error",
        statusCode: 500,
      },
    });
  });
});
