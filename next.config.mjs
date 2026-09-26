/** @type {import('next').NextConfig} */
// 서버 기능을 쓰지 않는 정적 페이지라 out/으로 뽑아 nginx가 서빙한다.
const nextConfig = {
  output: 'export',
};

export default nextConfig;
