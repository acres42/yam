import { render, screen } from "@testing-library/preact";
import { describe, it, expect, vi, beforeEach } from "vitest";
import QRCodeBlock from "@/components/QRCodeBlock";

describe("<QRCodeBlock />", () => {
  it("renders with default label", () => {
    render(<QRCodeBlock />);
    expect(screen.getByText("Scan to visit our site:")).toBeInTheDocument();
  });

  it("renders with a custom label", () => {
    render(<QRCodeBlock label="Custom Label Here" />);
    expect(screen.getByText("Custom Label Here")).toBeInTheDocument();
  });

  it("renders the QRCode component", () => {
    render(<QRCodeBlock />);
    const qr = screen.getByTestId?.("qr-code");
    expect(qr).toBeDefined();
  });

  it("does not render a label if passed an empty string", () => {
    render(<QRCodeBlock label="" />);
    expect(
      screen.queryByText("Scan to visit our site:"),
    ).not.toBeInTheDocument();
  });

  describe("when QRCode component throws", () => {
    beforeEach(() => {
      vi.resetModules();
      vi.doMock("@/components/QRCode", () => ({
        default: () => {
          throw new Error("Failed to render QRCode");
        },
      }));
    });

    it("fails gracefully if QRCode component throws", async () => {
      const { default: QRCodeBlock } = await import("@/components/QRCodeBlock");
      expect(() => render(<QRCodeBlock />)).toThrow("Failed to render QRCode");
    });
  });

  it("does not render an unexpected element", () => {
    render(<QRCodeBlock />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
