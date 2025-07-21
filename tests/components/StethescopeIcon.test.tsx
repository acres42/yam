import { render } from "@testing-library/preact";
import { describe, it, expect } from "vitest";
import StethoscopeIcon from "@/components/StethoscopeIcon";

describe("<StethoscopeIcon />", () => {
  it("renders the SVG without error", () => {
    const { container } = render(<StethoscopeIcon />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("applies the given class name", () => {
    const { container } = render(<StethoscopeIcon class="text-blue-500" />);
    expect(container.querySelector("svg")).toHaveClass("text-blue-500");
  });

  it("has expected SVG attributes", () => {
    const svg = render(<StethoscopeIcon />).container.querySelector("svg")!;
    expect(svg.getAttribute("viewBox")).toBe("0 0 24 24");
    expect(svg.getAttribute("stroke")).toBe("currentColor");
  });

  it("renders nothing if passed an undefined component", () => {
    const BrokenComponent: any = undefined;
    const { container } = render(<>{BrokenComponent && <BrokenComponent />}</>);
    expect(container.innerHTML).toBe("");
  });

  it("ignores className if not a string", () => {
    const { container } = render(<StethoscopeIcon class={123 as any} />);
    expect(container.querySelector("svg")?.getAttribute("class")).toBe(""); // should fallback to empty
  });

  it("renders only one svg element", () => {
    const { container } = render(<StethoscopeIcon />);
    expect(container.querySelectorAll("svg").length).toBe(1);
  });
});
