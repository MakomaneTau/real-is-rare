/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['raw.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dtzimw3pf8jogmpp.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;
