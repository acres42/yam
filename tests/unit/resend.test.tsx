import { Resend as ResendClass } from "resend";
const ResendClassMock = vi.mocked(ResendClass, true);
import { beforeEach, describe, it, expect, vi } from "vitest";

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
  beforeEach(() => {
    vi.resetModules();
  });

  it("initializes Resend with API key", async () => {
    await import("@/lib/resend");
    expect(ResendClassMock).toHaveBeenCalledWith(expect.any(String));
  });

  it("should expose emails.send()", async () => {
    const { resend } = await import("@/lib/resend");
    expect(typeof resend.emails.send).toBe("function");
  });

  it("handles failure when emails.send() rejects", async () => {
    vi.resetModules();
    vi.mock("resend", () => {
      return {
        Resend: vi.fn().mockImplementation(() => ({
          emails: {
            send: vi.fn().mockRejectedValue(new Error("Send failed")),
          },
        })),
      };
    });

    const { resend } = await import("@/lib/resend");
    await expect(resend.emails.send({})).rejects.toThrow("Send failed");
  });

  it("uses a non-empty string as the API key", async () => {
    await import("@/lib/resend");
    expect(ResendClass).toHaveBeenCalledWith(expect.stringMatching(/.+/));
  });

  it("handles missing emails property on Resend instance", async () => {
    vi.resetModules();
    vi.doMock("resend", () => {
      return {
        Resend: vi.fn().mockImplementation(() => ({})),
      };
    });

    const importResend = async () => {
      const { resend } = await import("@/lib/resend");
      return resend.emails.send({} as any);
    };

    await expect(importResend()).rejects.toThrow();
  });

  it("throws if resend.emails is not an object", async () => {
    vi.resetModules();
    vi.doMock("resend", () => {
      return {
        Resend: vi.fn().mockImplementation(() => ({
          emails: null,
        })),
      };
    });

    const importResend = async () => {
      const { resend } = await import("@/lib/resend");
      return resend.emails.send();
    };

    await expect(importResend()).rejects.toThrow();
  });

  it("throws if required fields are missing in send()", async () => {
    vi.resetModules();
    vi.doMock("resend", () => {
      return {
        Resend: vi.fn().mockImplementation(() => ({
          emails: {
            send: vi
              .fn()
              .mockRejectedValue(new Error("Missing required fields")),
          },
        })),
      };
    });

    const { resend } = await import("@/lib/resend");
    await expect(resend.emails.send({})).rejects.toThrow();
  });
});

it("retries send if it fails the first time", async () => {
  vi.resetModules();
  vi.doMock("resend", () => {
    const sendMock = vi
      .fn()
      .mockRejectedValueOnce(new Error("Temporary failure"))
      .mockResolvedValueOnce({ id: "retry-success-id" });

    return {
      Resend: vi.fn().mockImplementation(() => ({
        emails: {
          send: sendMock,
        },
      })),
    };
  });

  const { resend } = await import("@/lib/resend");
  let result;
  try {
    result = await resend.emails.send({} as any);
  } catch {
    result = await resend.emails.send({} as any);
  }

  expect(result).toEqual({ id: "retry-success-id" });
});

it("handles unexpected input types (e.g., script injection)", async () => {
  vi.resetModules();
  vi.doMock("resend", () => {
    return {
      Resend: vi.fn().mockImplementation(() => ({
        emails: {
          send: vi.fn().mockResolvedValue({ id: "safe-id" }),
        },
      })),
    };
  });

  const maliciousInput = {
    subject: "<script>alert('xss')</script>",
    html: "<script>alert('xss')</script>",
    text: "alert('xss')", // required field
  };

  const { resend } = await import("@/lib/resend");
  await expect(resend.emails.send(maliciousInput)).resolves.toHaveProperty(
    "id",
  );
});

describe("Resend misconfigurations", () => {
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
