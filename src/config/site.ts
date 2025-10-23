import yamLogo from "../assets/logos/optimized_yam.svg";
export interface SiteConfig {
  title: string;
  description: string;
  address: string;
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
  address:
    import.meta.env.PUBLIC_CONTACT_ADDRESS ||
    "9330 West Sahara Ave, Suite 230, Las Vegas, NV 89117",
  instagramUrl:
    import.meta.env.PUBLIC_INSTAGRAM_URL ||
    "https://www.instagram.com/asknpcarey?utm_source=qr&igsh=eXA5bG1hY3Y3d2o3",
  tiktokUrl:
    import.meta.env.PUBLIC_TIKTOK_URL ||
    "https://www.tiktok.com/@young.adult.medicine?_t=ZP-8xdJNkvvItz&_r=1",
  youtubeUrl:
    import.meta.env.PUBLIC_YOUTUBE_URL || "https://www.youtube.com/@AskNPCarey",
  email: import.meta.env.PUBLIC_CONTACT_EMAIL || "hello@example.com",
  phone: import.meta.env.PUBLIC_CONTACT_TELEPHONE || "(555) 555-5555",
  fax: import.meta.env.PUBLIC_CONTACT_FAX || "(555) 555-1212",
  scheduling:
    import.meta.env.PUBLIC_SCHEDULING_LINK ||
    "https://www.tebra.com/care/provider/carey-roselee-rn-msn-cpnp-bc-1093181406",
  url: import.meta.env.PUBLIC_SITE_URL || "https://www.youngadultmedicine.com/",
  logo: yamLogo,
};
