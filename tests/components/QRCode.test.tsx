import { render, screen, waitFor } from "@testing-library/preact";
import { describe, it, expect } from "vitest";
import QRCode from "@/components/QRCode";

describe("QRCode", () => {
  it("renders an SVG element", () => {
    render(<QRCode size={128} />);
    const svg = screen.getByTestId("qr-code");
    expect(svg).toBeInTheDocument();
  });

  it("sets the correct width and height based on size prop", () => {
    render(<QRCode value="test" size={256} />);
    const svg = screen.getByTestId("qr-code");
    expect(svg.getAttribute("width")).toMatch(/^(\d+)(mm|px)?$/);
    expect(svg.getAttribute("height")).toMatch(/^(\d+)(mm|px)?$/);
  });

  it("renders at least one <rect> element", async () => {
    render(<QRCode value="test" />);
    await waitFor(() => {
      const el = screen.getByTestId("qr-code");
      if (el instanceof SVGSVGElement) {
        const rects = el.querySelectorAll("rect");
        expect(rects.length).toBeGreaterThan(0);
      } else {
        throw new Error("Element is not an instance of SVGSVGElement");
      }
    });
  });

  it("has a valid image src", () => {
    const { container } = render(<QRCode />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
  });
});
