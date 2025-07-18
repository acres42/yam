import { render, screen } from "@testing-library/preact";
import { describe, it, expect } from "vitest";
import InstagramIcon from "@/components/InstagramIcon";

describe("InstagramIcon", () => {
  it("renders a link with the default Instagram href", () => {
    render(<InstagramIcon href="https://instagram.com" />);
    const link = screen.getByLabelText("Instagram");
    expect(link).toHaveAttribute(
      "href",
      expect.stringContaining("instagram.com"),
    );
  });

  it("renders with custom title and href", () => {
    render(
      <InstagramIcon
        title="Follow us on IG"
        href="https://instagram.com/example"
        iconColor="text-pink-500"
      />,
    );
    const link = screen.getByLabelText("Instagram");
    expect(link).toHaveAttribute("href", "https://instagram.com/example");
  });

  it("applies custom iconColor class", () => {
    render(<InstagramIcon iconColor="text-accent" />);
    const svg = screen.getByTitle("Instagram").closest("svg");
    expect(svg).toHaveClass("text-accent");
  });

  it("renders safely without optional props", () => {
    render(<InstagramIcon />);
    const link = screen.getByLabelText("Instagram");
    expect(link).toBeInTheDocument();
    expect(link.getAttribute("href")).toBeNull(); // no href set
  });

  it("uses default title 'Instagram' if no title is passed", () => {
    render(<InstagramIcon href="https://instagram.com" />);
    const svgTitle = screen.getByTitle("Instagram");
    expect(svgTitle).toBeInTheDocument();
  });

  it("combines iconColor with other svg classes", () => {
    render(
      <InstagramIcon href="https://instagram.com" iconColor="text-brand" />,
    );
    const svg = screen.getByTitle("Instagram").closest("svg");
    expect(svg).toHaveClass("text-brand");
    expect(svg).toHaveClass("transition");
  });

  it("opens link in a new tab", () => {
    render(<InstagramIcon href="https://instagram.com" />);
    const link = screen.getByLabelText("Instagram");
    expect(link).toHaveAttribute("target", "_blank");
  });
});
