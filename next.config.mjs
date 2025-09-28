/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: { remotePatterns: [{ protocol: 'https', hostname: '**' }] },

  // Vuelve a activar chequeos estrictos:
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false }
};

export default nextConfig;
