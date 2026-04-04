// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // MUI needs transpilation
  transpilePackages: ['@mui/material', '@mui/icons-material'],
};

export default nextConfig;