export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "New Arrivals",
      href: "/mens-new-arrivals",
    },
    {
      label: "All",
      href: "/mens-all",
    },
    {
      label: "T-Shirts",
      href: "/mens-t-shirts",
    },
    {
      label: "Sweatshirts",
      href: "/mens-sweatshirts",
    },
    {
      label: "Outerwear",
      href: "/mens-outerwear",
    },
    {
      label: "Bottoms",
      href: "/mens-bottoms",
    },
    {
      label: "Headwear",
      href: "/mens-headwear",
    },
    {
      label: "Accessories",
      href: "/mens-accessories",
    },
    {
      label: "Footwear",
      href: "/mens-footwear",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
  },
};
