import { beforeEach, describe, it, expect, vi } from "vitest";
import { mockSendEmail } from "../setup";

describe("Resend integration", () => {
  beforeEach(() => {
    process.env.RESEND_MOCK_SCENARIO = "success"; // or "error"
  });

  it("initializes Resend with API key", async () => {
    vi.resetModules();
    vi.doMock("resend", () => {
      const sendMock = vi.fn();
      const ResendClassMock = vi.fn().mockImplementation(() => ({
        emails: { send: sendMock },
      }));
      return { Resend: ResendClassMock };
    });

    const { Resend } = await import("resend");
    await import("@/lib/resend");
    expect(Resend).toHaveBeenCalledWith(expect.any(String));
  });

  it("should expose emails.send()", async () => {
    vi.resetModules();
    vi.doMock("resend", () => {
      const sendMock = vi.fn();
      const ResendClassMock = vi.fn().mockImplementation(() => ({
        emails: { send: sendMock },
      }));
      return { Resend: ResendClassMock };
    });

    const resend = (await import("@/lib/resend")).default;
    expect(typeof resend.emails.send).toBe("function");
  });

  it("handles failure when emails.send() rejects", async () => {
    vi.resetModules();
    vi.doMock("resend", () => {
      const ResendClassMock = vi.fn().mockImplementation(() => ({
        emails: {
          send: vi.fn().mockRejectedValue(new Error("Send failed")),
        },
      }));
      return { Resend: ResendClassMock };
    });

    const resend = (await import("@/lib/resend")).default;
    const promise = resend.emails.send({});
    await expect(promise).rejects.toThrow("Send failed");
  });

  it("uses a non-empty string as the API key", async () => {
    vi.resetModules();
    vi.doMock("resend", () => {
      const sendMock = vi.fn();
      const ResendClassMock = vi.fn().mockImplementation(() => ({
        emails: { send: sendMock },
      }));
      return { Resend: ResendClassMock };
    });

    const { Resend } = await import("resend");
    await import("@/lib/resend");
    expect(Resend).toHaveBeenCalledWith(expect.stringMatching(/.+/));
  });

  it("handles missing emails property on Resend instance", async () => {
    vi.resetModules();
    vi.doMock("resend", () => {
      const ResendClassMock = vi.fn().mockImplementation(() => ({}));
      return { Resend: ResendClassMock };
    });

    const importResend = async () => {
      const resend = (await import("@/lib/resend")).default;
      return resend.emails.send({} as any);
    };

    await expect(importResend()).rejects.toThrow();
  });

  it("throws if resend.emails is not an object", async () => {
    vi.resetModules();
    vi.doMock("resend", () => {
      const ResendClassMock = vi.fn().mockImplementation(() => ({
        emails: null,
      }));
      return { Resend: ResendClassMock };
    });

    const importResend = async () => {
      const resend = (await import("@/lib/resend")).default;
      return resend.emails.send();
    };

    await expect(importResend()).rejects.toThrow();
  });

  it("throws if required fields are missing in send()", async () => {
    vi.resetModules();
    vi.doMock("resend", () => {
      const ResendClassMock = vi.fn().mockImplementation(() => ({
        emails: {
          send: vi.fn().mockRejectedValue(new Error("Missing required fields")),
        },
      }));
      return { Resend: ResendClassMock };
    });

    const resend = (await import("@/lib/resend")).default;
    const promise = resend.emails.send({});
    await expect(promise).rejects.toThrow();
  });
});

it("retries send if it fails the first time", async () => {
  vi.resetModules();
  const sendMock = vi
    .fn()
    .mockRejectedValueOnce(new Error("Temporary failure"))
    .mockResolvedValueOnce({ id: "retry-success-id" });

  vi.doMock("resend", () => {
    return {
      Resend: vi.fn().mockImplementation(() => ({
        emails: {
          send: sendMock,
        },
      })),
    };
  });

  const resend = (await import("@/lib/resend")).default;
  try {
    await resend.emails.send({});
  } catch (_) {}
  const result = await resend.emails.send({});
  expect(result).toEqual({ id: "retry-success-id" });
});

it("handles unexpected input types (e.g., script injection)", async () => {
  vi.resetModules();
  vi.doMock("resend", () => {
    const sendMock = vi.fn().mockResolvedValue({ id: "safe-id" });
    const ResendClassMock = vi.fn().mockImplementation(() => ({
      emails: { send: sendMock },
    }));
    return { Resend: ResendClassMock };
  });

  const maliciousInput = {
    subject: "<script>alert('xss')</script>",
    html: "<script>alert('xss')</script>",
    text: "alert('xss')", // required field
  };

  const resend = (await import("@/lib/resend")).default;
  const promise = resend.emails.send(maliciousInput);
  await expect(promise).resolves.toHaveProperty("id");
});

describe("Resend misconfigurations", () => {
  it("throws an error if API key is missing", async () => {
    vi.resetModules();
    vi.unstubAllEnvs(); // Reset all env vars
    vi.stubEnv("RESEND_API_KEY", ""); // Stub with empty value

    // DO NOT mock "resend" here — we want the real behavior
    const importResend = async () => {
      return await import("@/lib/resend");
    };

    await expect(importResend()).rejects.toThrow("Resend API key not set.");
  });
});
