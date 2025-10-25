import { render, screen } from "@testing-library/preact";
import { describe, it, expect } from "vitest";
import Contact from "@/components/Contact";

describe("<Contact />", () => {
  const props = {
    telephone: "702-703-4917",
    fax: "775-490-0161",
    schedulingLink: "https://example.com/schedule",
  };

  it("renders the heading", () => {
    render(<Contact {...props} />);
    expect(
      screen.getByRole("heading", { name: /contact/i }),
    ).toBeInTheDocument();
  });

  it("renders the telephone number as a tel: link", () => {
    render(<Contact {...props} />);
    const phoneLink = screen.getByText(props.telephone);
    expect(phoneLink).toHaveAttribute("href", `tel:${props.telephone}`);
  });

  it("renders the fax number as a fax: link", () => {
    render(<Contact {...props} />);
    const faxLink = screen.getByText(props.fax);
    expect(faxLink).toHaveAttribute("href", `fax:${props.fax}`);
  });

  it("renders the scheduling link", () => {
    render(<Contact {...props} />);
    const link = screen.getByRole("link", { name: /book an appointment/i });
    expect(link).toHaveAttribute("href", props.schedulingLink);
  });

  it("renders the family image with correct alt text", () => {
    render(<Contact {...props} />);
    const img = screen.getByAltText(/family/i);
    expect(img).toBeInTheDocument();
  });

  it("does not render undefined if any props are missing", () => {
    render(<Contact telephone="" fax="" schedulingLink="" />);
    expect(screen.queryByText("undefined")).not.toBeInTheDocument();
  });

  it("does not render the scheduling link if it's missing", () => {
    render(<Contact telephone="123" fax="456" schedulingLink="" />);
    const link = screen.queryByRole("link", { name: /book an appointment/i });
    expect(link?.getAttribute("href")).not.toBeTruthy();
  });

  it("does not render the telephone link if the telephone is missing", () => {
    render(
      <Contact telephone="" fax="456" schedulingLink="https://example.com" />,
    );
    const phoneLink = screen.queryByRole("link", { name: /702-703-4917/i });
    expect(phoneLink).not.toBeInTheDocument();
  });

  it("renders an empty container if all props are empty", () => {
    const { container } = render(
      <Contact telephone="" fax="" schedulingLink="" />,
    );
    expect(container).toBeTruthy();
    const telAnchor = container.querySelector('a[href^="tel:"]');
    const faxAnchor = container.querySelector('a[href^="fax:"]');
    const schedLink = container.querySelector('a[href^="http"]');
    expect(telAnchor?.getAttribute("href")).toBe("tel:");
    expect(faxAnchor?.getAttribute("href")).toBe("fax:");
    expect(schedLink?.getAttribute("href") ?? "").toBe("");
  });
});
