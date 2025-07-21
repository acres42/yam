import { describe, it, expect, vi } from "vitest";
import { resend } from "@/lib/resend";
import { Resend as ResendClass } from "resend";

vi.mock("resend", () => {
  return {
    Resend: vi.fn().mockImplementation(() => ({
      emails: {
        send: vi.fn().mockResolvedValue({ id: "email-id-123" }),
      },
    })),
  };
});

describe("resend client", () => {
  it("initializes Resend with API key", () => {
    expect(ResendClass).toHaveBeenCalledWith(expect.any(String));
  });

  it("should expose emails.send()", () => {
    expect(typeof resend.emails.send).toBe("function");
  });

  it("throws an error if API key is missing", async () => {
    vi.resetModules();
    vi.doMock("resend", () => {
      return {
        Resend: vi.fn(() => {
          throw new Error("Resend API key not set.");
        }),
      };
    });

    const importResend = async () => {
      const { resend } = await import("@/lib/resend");
      return resend;
    };

    await expect(importResend()).rejects.toThrow("Resend API key not set.");
  });
});
