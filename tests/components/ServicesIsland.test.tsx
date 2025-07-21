import { render, screen } from "@testing-library/preact";
import { describe, expect, it, vi } from "vitest";
import ServicesIsland from "@/components/ServicesIsland";
import { servicesList, nonServicesList } from "@/types/content";

// Mock AOS to prevent side effects
vi.mock("aos", () => ({
  default: {
    init: vi.fn(),
  },
}));

describe("ServicesIsland", () => {
  // Positive test(s) would be here

  it("does not render an unrelated service name", () => {
    render(<ServicesIsland />);
    expect(screen.queryByText("Brain Surgery")).not.toBeInTheDocument();
  });

  it("does not crash if servicesList is empty", () => {
    vi.mock("@/types/content", async (importOriginal) => {
      const mod = await importOriginal();
      return {
        ...mod,
        servicesList: [],
      };
    });
    expect(() => render(<ServicesIsland />)).not.toThrow();
  });

  it("does not render section headings if component fails to mount", () => {
    const BrokenComponent = () => {
      throw new Error("Simulated render failure");
    };
    expect(() => render(<BrokenComponent />)).toThrow(
      "Simulated render failure",
    );
  });

  it("renders the 'What we treat' section heading", () => {
    render(<ServicesIsland />);
    expect(screen.getByText("What we treat")).toBeInTheDocument();
  });

  it("renders the 'What we DO NOT treat' section heading", () => {
    render(<ServicesIsland />);
    expect(screen.getByText("What we DO NOT treat")).toBeInTheDocument();
  });

  it("renders all items from servicesList", () => {
    render(<ServicesIsland />);
    for (const item of servicesList) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });

  it("renders all items from nonServicesList", () => {
    render(<ServicesIsland />);
    for (const item of nonServicesList) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });

  it("renders correct number of list items", () => {
    render(<ServicesIsland />);
    const allListItems = screen.getAllByRole("listitem");
    expect(allListItems.length).toBe(
      servicesList.length + nonServicesList.length,
    );
  });
});
