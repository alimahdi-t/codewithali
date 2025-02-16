/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.googleusercontent.com", port: "" },
      { protocol: "https", hostname: "sabzlearn.ir" }, // Corrected line
    ],
  },
};

export default nextConfig;
