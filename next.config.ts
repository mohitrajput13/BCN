import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Build ke time ESLint check skip karega
  },
};

export default nextConfig;

