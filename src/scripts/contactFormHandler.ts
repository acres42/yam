const form = document.getElementById("contact-form") as HTMLFormElement;
const buttonText = document.getElementById("button-text");
const spinner = document.getElementById("spinner");
const statusMessage = document.getElementById("status-message");

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  buttonText!.textContent = "Sending...";
  spinner!.classList.remove("hidden");

  const formData = new FormData(form);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: new URLSearchParams(formData as any),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (res.redirected) {
      window.location.href = res.url;
    } else {
      throw new Error("Unexpected response");
    }
  } catch (err) {
    console.error(err);
    statusMessage!.textContent =
      "Something went wrong. Please try again later. If the issue persists, please call us directly";
  } finally {
    buttonText!.textContent = "Send Message";
    spinner!.classList.add("hidden");
  }
});
