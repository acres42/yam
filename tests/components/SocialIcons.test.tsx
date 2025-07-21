import { render, screen } from "@testing-library/preact";
import { describe, it, expect } from "vitest";
import SocialIcons from "@/components/SocialIcons";

describe("<SocialIcons />", () => {
  it("renders the follow text", () => {
    render(<SocialIcons />);
    expect(screen.getByText(/follow me at/i)).toBeInTheDocument();
  });

  it('renders the username "askNPCarey"', () => {
    render(<SocialIcons />);
    expect(screen.getByText(/askNPCarey/)).toBeInTheDocument();
  });

  it("renders the SocialIconsOnly component", () => {
    render(<SocialIcons />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
  });

  it("does not render unrelated text", () => {
    render(<SocialIcons />);
    expect(screen.queryByText(/subscribe now/i)).not.toBeInTheDocument();
  });

  it("does not render an image with alt text 'profile'", () => {
    render(<SocialIcons />);
    expect(screen.queryByAltText(/profile/i)).not.toBeInTheDocument();
  });

  it("does not contain a button element", () => {
    render(<SocialIcons />);
    const buttons = screen.queryAllByRole("button");
    expect(buttons.length).toBe(0);
  });
});
