import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure Next doesn't try to infer workspace root from stray lockfiles
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
