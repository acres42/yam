import { render, screen, fireEvent } from "@testing-library/preact";
import { describe, it, expect } from "vitest";
import ScanQRButton from "../../src/components/ScanQRButton";

describe("ScanQRButton", () => {
  it("renders the Scan QR button", () => {
    render(<ScanQRButton />);
    expect(
      screen.getByRole("button", { name: /scan qr/i }),
    ).toBeInTheDocument();
  });

  it("closes the modal when close button is clicked", () => {
    render(<ScanQRButton />);
    fireEvent.click(screen.getByRole("button", { name: /scan qr/i }));
    fireEvent.click(screen.getByRole("button", { name: /✕/i }));
    expect(
      screen.queryByText(/scan to visit our site:/i),
    ).not.toBeInTheDocument();
  });
});

it("opens the modal when Scan QR button is clicked", () => {
  render(<ScanQRButton />);
  fireEvent.click(screen.getByRole("button", { name: /scan qr/i }));
  expect(screen.getByText(/scan to visit our site:/i)).toBeInTheDocument();
});

it("does not render modal by default", () => {
  render(<ScanQRButton />);
  expect(
    screen.queryByText(/scan to visit our site:/i),
  ).not.toBeInTheDocument();
});

it("does not trigger error when clicking outside modal", () => {
  render(<ScanQRButton />);
  const button = screen.getByRole("button", { name: /scan qr/i });
  fireEvent.click(button);
  // Simulate clicking somewhere non-interactive
  fireEvent.click(document.body);
  expect(screen.getByText(/scan to visit our site:/i)).toBeInTheDocument();
});

it("does not render multiple modals on repeated clicks", () => {
  render(<ScanQRButton />);
  const button = screen.getByRole("button", { name: /scan qr/i });
  fireEvent.click(button);
  fireEvent.click(button);
  expect(screen.getAllByText(/scan to visit our site:/i).length).toBe(1);
});

it("shows default label text in modal", () => {
  render(<ScanQRButton />);
  fireEvent.click(screen.getByRole("button", { name: /scan qr/i }));
  expect(screen.getByText("Scan to visit our site:")).toBeInTheDocument();
});

it("does not show an incorrect label by default", () => {
  render(<ScanQRButton />);
  fireEvent.click(screen.getByRole("button", { name: /scan qr/i }));
  expect(screen.queryByText("Unexpected Label")).not.toBeInTheDocument();
});
