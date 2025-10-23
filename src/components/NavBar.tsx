/** @jsxImportSource preact */
import { useState } from "preact/hooks";
import yamLogo from "../assets/logos/optimized_yam.svg";
import ScanQRButton from "./ScanQRButton";
import { SITE } from "../config/site";

const siteName = SITE.title;

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header class="z-60 shadow-black-glow bg-emergency">
      <div class="mx-auto max-w-6xl px-4 py-3 sm:py-4">
        <div class="flex items-center justify-between sm:hidden">
          <a href="/" class="flex items-center gap-2">
            <img src={yamLogo.src} alt="YAM Logo" class="h-6 w-6" />
            <h1 class="text-darkblue text-base font-semibold">{siteName}</h1>
          </a>

          <button
            class="text-darkblue focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div class="mt-4 flex flex-col gap-3 sm:hidden">
            <ScanQRButton />
            <nav class="flex flex-col items-start gap-2 text-sm">
              <a
                href="/"
                class="font-semibold text-secondary hover:text-primary hover:no-underline"
              >
                Home
              </a>
              <a
                href="/services/"
                class="font-semibold text-secondary hover:text-primary hover:no-underline"
              >
                Services
              </a>
              <a
                href="/forms/"
                class="font-semibold text-secondary hover:text-primary hover:no-underline"
              >
                Forms
              </a>
              <a
                href="/contact/"
                class="font-semibold text-secondary hover:text-primary hover:no-underline"
              >
                Contact
              </a>
              <a
                href="/about/"
                class="font-semibold text-secondary hover:text-primary hover:no-underline"
              >
                About
              </a>
            </nav>
          </div>
        )}

        <div class="hidden items-end justify-between sm:flex">
          <a href="/" class="flex items-center gap-2">
            <img src={yamLogo.src} alt="YAM Logo" class="h-10 w-10" />
            <h1 class="text-darkblue text-2xl font-semibold">{siteName}</h1>
          </a>

          <div class="flex flex-col items-end gap-2">
            <ScanQRButton />
            <nav class="flex space-x-4 text-base">
              <a
                href="/"
                class="font-semibold text-secondary hover:text-primary hover:no-underline"
              >
                Home
              </a>
              <a
                href="/services/"
                class="font-semibold text-secondary hover:text-primary hover:no-underline"
              >
                Services
              </a>
              <a
                href="/forms/"
                class="font-semibold text-secondary hover:text-primary hover:no-underline"
              >
                Forms
              </a>
              <a
                href="/contact/"
                class="font-semibold text-secondary hover:text-primary hover:no-underline"
              >
                Contact
              </a>
              <a
                href="/about/"
                class="font-semibold text-secondary hover:text-primary hover:no-underline"
              >
                About
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
