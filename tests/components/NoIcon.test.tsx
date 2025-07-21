// tests/components/NoIcon.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/preact";
import NoIcon from "@/components/NoIcon";

describe("<NoIcon />", () => {
  it("renders an SVG element", () => {
    render(<NoIcon />);
    const svg = screen.getByTestId("no-icon");
    expect(svg).toBeInTheDocument();
    expect(svg.tagName.toLowerCase()).toBe("svg");
  });

  it("applies default class when none is provided", () => {
    render(<NoIcon />);
    const svg = screen.getByTestId("no-icon");
    expect(svg.getAttribute("class")).toBe("");
  });

  it("applies custom class when provided", () => {
    render(<NoIcon class="text-red-500" />);
    const svg = screen.getByTestId("no-icon");
    expect(svg).toHaveAttribute("class", "text-red-500");
  });

  it("does not throw when class is undefined", () => {
    expect(() => render(<NoIcon class={undefined} />)).not.toThrow();
  });

  it("does not render an unexpected <img> element", () => {
    render(<NoIcon />);
    const img = screen.queryByRole("img", { name: /icon/i });
    expect(img).toBeNull();
  });

  it("does not apply unintended class names", () => {
    render(<NoIcon class="text-blue-600" />);
    const svg = screen.getByTestId("no-icon");
    expect(svg.className).not.toContain("text-red-500");
  });
});
