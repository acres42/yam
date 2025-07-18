import { render, screen } from "@testing-library/preact";
import { describe, it, expect } from "vitest";
import TikTokIcon from "@/components/TikTokIcon";

describe("TikTokIcon", () => {
  it("renders a link with the correct href", () => {
    render(<TikTokIcon href="https://tiktok.com" />);
    const link = screen.getByLabelText("TikTok");
    expect(link).toHaveAttribute("href", expect.stringContaining("tiktok.com"));
  });

  it("uses default title if none is provided", () => {
    render(<TikTokIcon href="https://tiktok.com" />);
    const title = screen.getByTitle("TikTok");
    expect(title).toBeInTheDocument();
  });

  it("applies custom iconColor class", () => {
    render(<TikTokIcon href="https://tiktok.com" iconColor="text-accent" />);
    const svg = screen.getByTitle("TikTok").closest("svg");
    expect(svg).toHaveClass("text-accent");
  });

  it("opens the link in a new tab", () => {
    render(<TikTokIcon href="https://tiktok.com" />);
    const link = screen.getByLabelText("TikTok");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("renders safely even without props", () => {
    render(<TikTokIcon />);
    const link = screen.getByLabelText("TikTok");
    expect(link).toBeInTheDocument();
  });
});
