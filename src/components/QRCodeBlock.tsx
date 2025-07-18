/** @jsxImportSource preact */
import QRCode from "./QRCode";

type QRCodeBlockProps = {
  label?: string;
};

export default function QRCodeBlock({
  label = "Scan to visit our site:",
}: QRCodeBlockProps) {
  return (
    <div class="mt-4 flex w-full flex-col items-center text-center">
      <p class="mb-2">{label}</p>
      <div class="mt-1">
        <div class="mx-auto">
          <QRCode />
        </div>
      </div>
    </div>
  );
}
