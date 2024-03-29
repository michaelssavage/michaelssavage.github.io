// For SASS path
const path = require("path");

// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
