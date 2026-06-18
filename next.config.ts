import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: process.env.NODE_ENV === "production" ? "dist" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
