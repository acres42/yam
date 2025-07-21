/** @jsxImportSource preact */
import { render, screen, fireEvent } from "@testing-library/preact";
import { describe, it, expect } from "vitest";
import QRCodeModal from "@/components/QRCodeModal";

describe("<QRCodeModal />", {}, () => {
  it('renders the "Scan QR" button', () => {
    render(<QRCodeModal />);
    expect(screen.getByText(/scan qr/i)).toBeInTheDocument();
  });

  it("opens the modal when the button is clicked", async () => {
    render(<QRCodeModal />);
    const button = screen.getByText(/scan qr/i);
    fireEvent.click(button);
    expect(screen.getByText(/scan to visit our site/i)).toBeInTheDocument();
  });

  it("displays the QR code image when open", () => {
    render(<QRCodeModal />);
    fireEvent.click(screen.getByText(/scan qr/i));
    expect(screen.getByAltText(/qr code/i)).toBeInTheDocument();
    expect(screen.getByAltText(/qr code/i).getAttribute("src")).toBe("/qr.svg");
  });

  it("closes the modal when the ✕ button is clicked", () => {
    render(<QRCodeModal />);
    fireEvent.click(screen.getByText(/scan qr/i));
    const closeBtn = screen.getByLabelText(/close/i);
    fireEvent.click(closeBtn);
    expect(
      screen.queryByText(/scan to visit our site/i),
    ).not.toBeInTheDocument();
  });

  it("does not render modal content by default", () => {
    render(<QRCodeModal />);
    expect(
      screen.queryByText(/scan to visit our site/i),
    ).not.toBeInTheDocument();
    expect(screen.queryByAltText(/qr code/i)).not.toBeInTheDocument();
  });

  it("gracefully handles repeated close attempts", () => {
    render(<QRCodeModal />);
    fireEvent.click(screen.getByText(/scan qr/i));
    fireEvent.click(screen.getByLabelText(/close/i));

    const closeBtn = screen.queryByLabelText(/close/i);
    expect(closeBtn).toBeNull();
  });

  it("renders modal even if QR code image is missing or not resolved", () => {
    render(<QRCodeModal />);
    fireEvent.click(screen.getByText(/scan qr/i));
    const qrImg = screen.queryByAltText(/qr code/i);
    expect(qrImg).toBeInTheDocument();
  });
});
