import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.29.6', '192.168.1.6', 'localhost', '127.0.0.1'],
  experimental: {
  },
};

export default nextConfig;
