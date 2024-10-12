/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "cdn.sanity.io",
        protocol: "https",
      },
      {
        hostname: "assets.aceternity.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
