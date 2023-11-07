/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   serverActions: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.cdn.printful.com",
        port: "",
        pathname: "/files/**",
      },
    ],
  },
}

module.exports = nextConfig
