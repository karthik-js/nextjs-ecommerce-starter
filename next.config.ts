import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["better-sqlite3"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  cacheComponents: true,
  reactCompiler: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
    incomingRequests: true,
    browserToTerminal: true,
  },
  reactStrictMode: true,
  typedRoutes: true,
  experimental: {
    viewTransition: true,
    taint: true,
    typedEnv: true,
  },
};

export default nextConfig;
