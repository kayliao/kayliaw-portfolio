import type { NextConfig } from "next";

console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("NEXT_PUBLIC_BASE_PATH:", process.env.NEXT_PUBLIC_BASE_PATH);

const nextConfig = {
  output: "export",          // enable static export
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
  trailingSlash: true,       // optional: adds trailing slash to routes
  images: {
    unoptimized: true,       // prevents Next.js image optimization for static export
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || "",
  },
};

module.exports = nextConfig;