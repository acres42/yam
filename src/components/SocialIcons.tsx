/** @jsxImportSource preact */
import SocialIconsOnly from "./SocialIconsOnly";

export default function SocialIcons() {
  return (
    <div class="bg-tertiary py-8 text-bg">
      <div class="flex items-center justify-center gap-6 text-2xl">
        <p class="px-2 text-xl text-secondary">
          Follow me at{" "}
          <span class="text-2xl font-bold text-bg">askNPCarey</span>
        </p>
        <SocialIconsOnly />
      </div>
    </div>
  );
}
