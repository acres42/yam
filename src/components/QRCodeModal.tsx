import { useState } from "preact/hooks";

export default function QRCodeModal() {
  const [open, setOpen] = useState(false);

  return (
    <div class="relative z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        class="flex items-center gap-1 text-xs text-secondary hover:text-primary sm:text-sm"
      >
        📱 Scan QR
      </button>

      {/* Modal */}
      {open && (
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div class="relative w-64 rounded-lg bg-white p-4 text-center shadow-lg">
            <button
              onClick={() => setOpen(false)}
              class="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition hover:bg-gray-300 hover:text-black"
              aria-label="Close"
            >
              ✕
            </button>
            <p class="mb-2 text-sm text-gray-800">Scan to visit our site:</p>
            <div class="mx-auto mt-2 w-40">
              {/* Embed the QRCode SVG directly here */}
              <img src="/qr.svg" alt="QR Code" class="h-auto w-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
