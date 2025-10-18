import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        pathname: "**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
