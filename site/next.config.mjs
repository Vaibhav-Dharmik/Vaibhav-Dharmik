// next.config.mjs - Basic Next.js config tuned for static portfolio.
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: [{ key: "Permissions-Policy", value: "interest-cohort=()" }],
    },
  ],
};
export default nextConfig;
