/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com', 'media.istockphoto.com', 'images.unsplash.com', 'api.lorem.space', 'ui-avatars.com'],
  },
};

module.exports = nextConfig;
