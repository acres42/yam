import { describe, it, expect, beforeEach } from "vitest";
import toggleModal from "../../src/scripts/toggleModal";

describe("toggleModal", () => {
  let modal: HTMLDivElement;
  let button: HTMLButtonElement;

  beforeEach(() => {
    document.body.innerHTML = `
    <div id="modal" class="hidden" aria-hidden="true"></div>
    <button id="toggle-button">Toggle</button>
  `;

    modal = document.getElementById("modal") as HTMLDivElement;
    button = document.getElementById("toggle-button") as HTMLButtonElement;
  });

  it("shows the modal if it is hidden", () => {
    expect(modal.classList.contains("hidden")).toBe(true);
    toggleModal(modal, button);
    expect(modal.classList.contains("hidden")).toBe(false);
  });

  it("hides the modal if it is visible", () => {
    modal.classList.remove("hidden");
    expect(modal.classList.contains("hidden")).toBe(false);
    toggleModal(modal, button);
    expect(modal.classList.contains("hidden")).toBe(true);
  });

  it("removes aria-hidden attribute when showing the modal", () => {
    modal.setAttribute("aria-hidden", "true");
    toggleModal(modal, button);
    expect(modal.hasAttribute("aria-hidden")).toBe(false);
  });
});
