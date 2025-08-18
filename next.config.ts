import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ignore CSS import errors in test routes
  webpack: (config, { dev }) => {
    if (dev) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        'globalls.css': false,
      }
    }
      return config
    }
};

export default nextConfig;
