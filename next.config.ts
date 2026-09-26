import type { NextConfig } from "next";

/**
 * Static export for free GitHub Pages hosting.
 * Set NEXT_PUBLIC_BASE_PATH=/repo-name when deploying to username.github.io/repo-name
 * Leave empty for custom domain or username.github.io root repo.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
