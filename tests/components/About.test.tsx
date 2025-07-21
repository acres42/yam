import { render, screen } from "@testing-library/preact";
import { describe, it, expect, vi } from "vitest";
import { About } from "@/components/About";

describe("<About />", () => {
  it("renders the About heading and all paragraph content", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { name: /all about yam/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/YAM is a telehealth-first practice/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /I'm Carey, a board-certified Pediatric Nurse Practitioner/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/trusted medical care with empathy/i),
    ).toBeInTheDocument();
  });

  it("renders both images with correct alt text", () => {
    render(<About />);
    expect(
      screen.getByAltText(/Family enjoying telehealth services/i),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(/Carey Roselee, Pediatric NP/i),
    ).toBeInTheDocument();
  });

  it("applies the passed className prop to the section", () => {
    render(<About className="custom-class" />);
    const section = screen.getByRole("region", { name: /about/i });
    expect(section).toHaveClass("custom-class");
  });

  it("renders alt text even if image sources are undefined", async () => {
    vi.mock("@/assets/marketing/family72.jpg", () => ({
      default: { src: "" },
    }));
    vi.mock("@/assets/headshots/carey_headshot.jpg", () => ({
      default: { src: "" },
    }));
    const { About } = await import("@/components/About");
    render(<About />);
    const familyImg = screen.getByAltText(
      /Family enjoying telehealth services/i,
    );
    const careyImg = screen.getByAltText(/Carey Roselee, Pediatric NP/i);
    expect(familyImg).toBeInTheDocument();
    expect(careyImg).toBeInTheDocument();
    expect(familyImg).toHaveAttribute("src", "");
    expect(careyImg).toHaveAttribute("src", "");
  });

  it("gracefully renders without a className prop", () => {
    render(<About />);
    const section = screen.getByRole("region", { name: /about/i });
    expect(section).toBeInTheDocument();
    expect(section.className).not.toContain("undefined");
  });

  it("does not overflow its container", () => {
    const { container } = render(
      <div style={{ width: "300px", overflow: "hidden" }}>
        <About />
      </div>,
    );
    const section = container.querySelector("section");
    expect(section?.scrollWidth).toBeLessThanOrEqual(300);
  });
});
