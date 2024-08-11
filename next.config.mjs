/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    mdxRs: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      {
        pathname: "https",
        hostname: "*",
      },
      {
        pathname: "http",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
