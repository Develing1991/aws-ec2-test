/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "suhanLee_deploy_build_Id",

  // out 폴더 (정적 페이지) 빌드할 목록 명시
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
  }),
  async rewrites() {
    return [
      {
        destination: "https://backendonline.codebootcamp.co.kr/graphql/:path*",
        source: "/",
      },
    ];
  },
};

module.exports = nextConfig;
