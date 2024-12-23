import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.swu-db.com", "www.pngfind.com"],
  },
};

export default nextConfig;
