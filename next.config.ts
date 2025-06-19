import type { NextConfig } from "next";

const isGithubPages = process.env.DEPLOY_ENV === 'GH_PAGES';

const nextConfig = {
  output: 'export',
  assetPrefix: isGithubPages ? '/personal-website/' : '',
  basePath: isGithubPages ? '/personal-website' : '',
};

export default nextConfig;