/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: { ignoreDuringBuilds: true },     // evita que el build se detenga por errores de lint
  typescript: { ignoreBuildErrors: true },  // evita que el build se detenga por errores de TS
  images: { remotePatterns: [{ protocol: 'https', hostname: '**' }] } // permite imágenes externas
};

export default nextConfig;
