document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById(
    "contact-form",
  ) as HTMLFormElement | null;
  const button = document.getElementById(
    "submit-button",
  ) as HTMLButtonElement | null;
  const buttonText = document.getElementById("button-text");
  const spinner = document.getElementById("spinner");

  if (!form || !button || !buttonText || !spinner) return;

  form.addEventListener("submit", () => {
    button.disabled = true;
    buttonText.textContent = "Sending...";
    spinner.classList.remove("hidden");
  });
});
