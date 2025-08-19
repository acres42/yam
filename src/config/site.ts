import yamLogo from "../assets/logos/optimized_yam.svg";
export interface SiteConfig {
  title: string;
  description: string;
  phone: string;
  fax?: string;
  email: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  youtubeUrl?: string;
  scheduling?: string;
  url: string;
  logo?: any;
}

export const SITE: SiteConfig = {
  title: import.meta.env.PUBLIC_SITE_TITLE || "Young Adult Medicine",
  description:
    import.meta.env.PUBLIC_SITE_DESCRIPTION || "Your health is our priority.",
  instagramUrl: import.meta.env.PUBLIC_INSTAGRAM_URL || "https://instagram.com",
  tiktokUrl: import.meta.env.PUBLIC_TIKTOK_URL || "https://tiktok.com",
  youtubeUrl: import.meta.env.PUBLIC_YOUTUBE_URL || "https://youtube.com",
  email: import.meta.env.PUBLIC_CONTACT_EMAIL || "hello@example.com",
  phone: import.meta.env.PUBLIC_CONTACT_TELEPHONE || "(555) 555-5555",
  fax: import.meta.env.PUBLIC_CONTACT_FAX || "(555) 555-1212",
  scheduling:
    import.meta.env.PUBLIC_SCHEDULING_LINK ||
    "https://www.tebra.com/care/provider/carey-roselee-rn-msn-cpnp-bc-1093181406",
  url: import.meta.env.PUBLIC_SITE_URL || "https://www.youngadultmedicine.com",
  logo: yamLogo,
};
