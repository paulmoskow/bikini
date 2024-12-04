/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'standalone', 
    images: {
      unoptimized: true,  
    },
    basePath: '/bikini', 
  };
  
  export default nextConfig;