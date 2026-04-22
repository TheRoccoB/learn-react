import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      '@lessons': path.resolve(__dirname, 'lessons'),
    },
  },
  webpack: (config) => {
    config.resolve.alias['@lessons'] = path.resolve(__dirname, 'lessons');
    return config;
  },
};

export default nextConfig;
