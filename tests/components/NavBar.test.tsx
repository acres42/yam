/** @jsxImportSource preact */
import { render, screen, fireEvent } from "@testing-library/preact";
import { test, expect } from "vitest";
import NavBar from "@/components/NavBar";

test("renders site name", () => {
  render(<NavBar />);
  expect(
    screen.getAllByRole("heading", { name: /young adult medicine/i })[0],
  ).toBeInTheDocument();
});

test("renders navigation links", () => {
  render(<NavBar />);
  expect(screen.getAllByRole("link", { name: /home/i })[0]).toBeInTheDocument();
  expect(
    screen.getAllByRole("link", { name: /forms/i })[0],
  ).toBeInTheDocument();
  expect(
    screen.getAllByRole("link", { name: /contact/i })[0],
  ).toBeInTheDocument();
  expect(
    screen.getAllByRole("link", { name: /about/i })[0],
  ).toBeInTheDocument();
});

test("renders Scan QR button", () => {
  render(<NavBar />);
  expect(
    screen.getAllByRole("button", { name: /scan qr/i })[0],
  ).toBeInTheDocument();
});

test("does not render non-existent navigation link", () => {
  render(<NavBar />);
  expect(screen.queryByRole("link", { name: /blog/i })).not.toBeInTheDocument();
});

test("does not show QR modal initially", () => {
  render(<NavBar />);
  expect(
    screen.queryByText(/scan to visit our site:/i),
  ).not.toBeInTheDocument();
});

test("QR modal closes when clicking ✕", () => {
  render(<NavBar />);
  fireEvent.click(screen.getAllByRole("button", { name: /scan qr/i })[0]);
  fireEvent.click(screen.getByRole("button", { name: /✕/i }));
  expect(
    screen.queryByText(/scan to visit our site:/i),
  ).not.toBeInTheDocument();
});
