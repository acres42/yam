document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById(
    "open-qr-btn",
  ) as HTMLButtonElement | null;
  const closeBtn = document.getElementById(
    "close-qr-btn",
  ) as HTMLButtonElement | null;
  const modal = document.getElementById("qr-modal") as HTMLDivElement | null;

  if (!openBtn || !closeBtn || !modal) {
    console.warn("One or more modal elements not found.");
    return;
  }

  const hideModal = () => {
    modal.classList.add("hidden");
  };

  openBtn.addEventListener("click", (event: MouseEvent) => {
    event.stopPropagation();
    modal.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", (event: MouseEvent) => {
    event.stopPropagation();
    hideModal();
  });

  modal.addEventListener("click", (event: MouseEvent) => {
    if (event.target === modal) {
      hideModal();
    }
  });
});
