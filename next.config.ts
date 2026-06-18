import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/harish-world-of-accounts" : undefined,
  distDir: process.env.NODE_ENV === "production" ? "dist" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
