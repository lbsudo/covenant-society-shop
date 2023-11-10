export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  mensItems: [
    // {
    //   label: "New Arrivals",
    //   href: "/category/mens-new-arrivals",
    // },
    {
      label: "All",
      href: "/category/mens-all",
    },
    {
      label: "T-Shirts",
      href: "/category/mens-t-shirts",
    },
    {
      label: "Tops",
      href: "/category/mens-tops",
    },
    {
      label: "Sweatshirts",
      href: "/category/mens-sweatshirts",
    },
    // {
    //   label: "Outerwear",
    //   href: "/category/mens-outerwear",
    // },
    {
      label: "Bottoms",
      href: "/category/mens-bottoms",
    },
    // {
    //   label: "Headwear",
    //   href: "/category/mens-headwear",
    // },
    // {
    //   label: "Accessories",
    //   href: "/category/mens-accessories",
    // },
    // {
    //   label: "Footwear",
    //   href: "/category/mens-footwear",
    // },
  ],
  // womensItems: [
  //   {
  //     label: "New Arrivals",
  //     href: "/category/womens-new-arrivals",
  //   },
  //   {
  //     label: "All",
  //     href: "/category/womens-all",
  //   },
  //   {
  //     label: "Tops",
  //     href: "/category/womens-tops",
  //   },
  //   {
  //     label: "Sweatshirts",
  //     href: "/category/womens-sweatshirts",
  //   },
  //   {
  //     label: "Bottoms",
  //     href: "/category/womens-bottoms",
  //   },
  //   {
  //     label: "Accessories",
  //     href: "/category/womens-accessories",
  //   },
  // ],
  // collectionItems: [
  //   {
  //     label: "Classic",
  //     href: "/category/classic",
  //   },
  //   {
  //     label: "Collegiate",
  //     href: "/category/Collegiate",
  //   },
  //   {
  //     label: "OG",
  //     href: "/category/OG",
  //   },

  // ],
  // collabItems: [
  //   {
  //     label: "Coming Soon",
  //     href: "/category/coming-soon",
  //   },
  // ],
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
