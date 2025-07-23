import { describe, it, expect, beforeEach, vi } from "vitest";
import { initToggleModal } from "@/scripts/initToggleModal";

describe("initToggleModal", () => {
  let openBtn: HTMLButtonElement;
  let closeBtn: HTMLButtonElement;
  let modal: HTMLDivElement;

  beforeEach(() => {
    document.body.innerHTML = `
      <button id="open-qr-btn">Open</button>
      <div id="qr-modal" class="hidden">
        <button id="close-qr-btn">Close</button>
      </div>
    `;
    openBtn = document.getElementById("open-qr-btn") as HTMLButtonElement;
    closeBtn = document.getElementById("close-qr-btn") as HTMLButtonElement;
    modal = document.getElementById("qr-modal") as HTMLDivElement;

    vi.restoreAllMocks();
  });

  it("should show and hide the modal on open and close button clicks", () => {
    initToggleModal();

    // Simulate clicking open button
    openBtn.click();
    expect(modal.classList.contains("hidden")).toBe(false);

    // Simulate clicking close button
    closeBtn.click();
    expect(modal.classList.contains("hidden")).toBe(true);
  });

  it("should warn if modal elements are missing", () => {
    document.body.innerHTML = ""; // remove all elements
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    initToggleModal();
    expect(warnSpy).toHaveBeenCalledWith(
      "One or more modal elements not found.",
    );
  });
});
