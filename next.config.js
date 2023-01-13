/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "suhanLee_deploy_build_Id",
};

module.exports = nextConfig;
