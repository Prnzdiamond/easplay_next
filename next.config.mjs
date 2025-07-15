/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        domains: ["games.easplay.com", "admin.fundam.ng"],
        unoptimized: true,
    },
}

export default nextConfig;