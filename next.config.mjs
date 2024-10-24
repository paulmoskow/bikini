/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', 
    images: {
      unoptimized: true,  
    },
    assetPrefix: './',  
    basePath: '/bikini',  
  };
  
  export default nextConfig;