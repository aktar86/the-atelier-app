/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // port: "",
        // pathname: "/my-bucket/**",
        // search: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        // port: "",
        // pathname: "/my-bucket/**",
        // search: "",
      },
    ],
  },
};

export default nextConfig;
