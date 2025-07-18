import { render, screen } from "@testing-library/preact";
import { describe, it, expect } from "vitest";
import YouTubeIcon from "../../src/components/YoutubeIcon";

describe("YouTubeIcon", () => {
  it("renders a link with the default YouTube href", () => {
    render(<YouTubeIcon href="https://youtube.com" />);
    const link = screen.getByLabelText("YouTube");
    expect(link).toHaveAttribute(
      "href",
      expect.stringContaining("youtube.com"),
    );
  });

  it("renders with custom title and href", () => {
    render(
      <YouTubeIcon
        href="https://youtube.com/yourchannel"
        title="Watch Us"
        iconColor="text-green-500"
      />,
    );
    const link = screen.getByLabelText("YouTube");
    expect(link).toHaveAttribute("href", "https://youtube.com/yourchannel");
    const svg = screen.getByTitle("Watch Us");
    expect(svg).toBeInTheDocument();
  });

  it("applies custom iconColor class", () => {
    render(<YouTubeIcon iconColor="text-red-600" />);
    const svg = screen.getByTitle("YouTube").closest("svg");
    expect(svg).toHaveClass("text-red-600");
  });
});
