// src/components/ScanQRButton.tsx
import { useState } from "preact/hooks";
import QRCode from "./QRCode";

export default function ScanQRButton() {
  const [open, setOpen] = useState(false);

  return (
    <div class="relative z-50">
      <button
        onClick={() => setOpen(true)}
        class="inline-flex items-center gap-1 rounded-md border border-secondary px-3 py-1 text-xs text-secondary shadow-sm transition hover:bg-primary hover:text-primary hover:text-white sm:text-sm"
      >
        📱 Scan QR
      </button>

      {open && (
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div class="relative w-64 rounded-lg bg-white p-4 text-center shadow-lg">
            <button
              onClick={() => setOpen(false)}
              class="absolute right-2 top-2 text-gray-600 hover:text-black"
            >
              ✕
            </button>
            <p class="mb-2 text-sm text-gray-800">Scan to visit our site:</p>
            <div class="mx-auto w-full max-w-[160px]">
              <QRCode />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
