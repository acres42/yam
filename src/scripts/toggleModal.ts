export default function toggleModal(modal: HTMLElement) {
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
    modal.removeAttribute("aria-hidden");
  } else {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
  }
}
