/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
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
