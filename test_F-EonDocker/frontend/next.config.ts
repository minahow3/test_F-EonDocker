import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // プロキシ設定を追加
  async rewrites() {
    return [
      {
        source: '/api/:path*', // フロントエンドの /api/* に対するリクエスト
        destination: 'http://backend:5000/api/:path*', // バックエンドの API エンドポイント
      },
    ];
  },
};

export default nextConfig;
