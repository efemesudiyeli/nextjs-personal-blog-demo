/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  reactStrictMode: false,
};
