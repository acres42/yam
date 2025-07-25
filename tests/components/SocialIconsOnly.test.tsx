import { render, screen } from "@testing-library/preact";
import { describe, it, expect } from "vitest";
import SocialIconsOnly from "@/components/SocialIconsOnly";
import { SITE } from "@/config/site";

describe("<SocialIconsOnly />", () => {
  it("renders Instagram, TikTok, and YouTube icons with correct links", () => {
    render(<SocialIconsOnly />);
    expect(screen.getByRole("link", { name: /Instagram/i })).toHaveAttribute(
      "href",
      SITE.instagramUrl,
    );
    expect(screen.getByRole("link", { name: /TikTok/i })).toHaveAttribute(
      "href",
      SITE.tiktokUrl,
    );
    expect(screen.getByRole("link", { name: /YouTube/i })).toHaveAttribute(
      "href",
      SITE.youtubeUrl,
    );
  });

  it("applies default iconColor and bgColor classes", () => {
    const { container } = render(<SocialIconsOnly />);
    expect(container.firstChild).toHaveClass("bg-tertiary");
    expect(
      screen.getByRole("link", { name: /Instagram/i }).querySelector("svg"),
    ).toHaveClass("text-primary");
  });

  it("applies custom styling when props are passed", () => {
    const { container } = render(
      <SocialIconsOnly iconColor="text-green-600" bgColor="bg-black" />,
    );
    expect(container.firstChild).toHaveClass("bg-black");
    expect(
      screen.getByRole("link", { name: /TikTok/i }).querySelector("svg"),
    ).toHaveClass("text-green-600");
  });

  it("renders without crashing even if URLs are empty", () => {
    const original = { ...SITE };
    SITE.instagramUrl = "";
    SITE.tiktokUrl = "";
    SITE.youtubeUrl = "";
    expect(() => render(<SocialIconsOnly />)).not.toThrow();
    Object.assign(SITE, original); // restore after test
  });

  it("does not render a Facebook icon", () => {
    render(<SocialIconsOnly />);
    expect(screen.queryByTitle("Facebook")).not.toBeInTheDocument();
  });

  it("does not apply undefined iconColor or bgColor classes", () => {
    const { container } = render(
      <SocialIconsOnly
        iconColor={undefined as any}
        bgColor={undefined as any}
      />,
    );
    expect(container.firstChild).toHaveClass("bg-tertiary");
    expect(
      screen.getByRole("link", { name: /YouTube/i }).querySelector("svg"),
    ).toHaveClass("text-primary");
  });
});
