/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
    serverExternalPackages: ["mongoose"],
  },
};

export default nextConfig;
