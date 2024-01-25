/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'de.statista.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.statcdn.com',
      },
    ],
  },
};

export default nextConfig;
