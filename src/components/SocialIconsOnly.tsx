/** @jsxImportSource preact */
import { SITE } from "../config/site";
import InstagramIcon from "./InstagramIcon";
import TikTokIcon from "./TikTokIcon";
import YouTubeIcon from "./YoutubeIcon";

const { instagramUrl, tiktokUrl, youtubeUrl } = SITE;

type SocialIconsOnlyProps = {
  iconColor?: string;
  bgColor?: string;
};

export default function SocialIconsOnly({
  iconColor = "text-primary",
  bgColor = "bg-tertiary",
}: SocialIconsOnlyProps) {
  return (
    <div class={`${bgColor} px-2 py-1 sm:px-4 sm:py-4`}>
      <div class="flex justify-center gap-6 text-2xl">
        <InstagramIcon
          iconColor={iconColor}
          href={instagramUrl}
          title="Instagram"
        />
        <TikTokIcon iconColor={iconColor} href={tiktokUrl} title="TikTok" />
        <YouTubeIcon iconColor={iconColor} href={youtubeUrl} title="YouTube" />
      </div>
    </div>
  );
}
