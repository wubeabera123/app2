import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config: { plugins: unknown[]; }, options: { isServer: unknown; }) {
    const {  } = options;
    
    config.plugins.push(
      new NextFederationPlugin({
        name: 'recruitment',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          // Expose the EmployeeCount component to the HR system
          './EmployeeCount': './components/employee-count.tsx',
        },
        shared: {
          // Share dependencies to avoid duplicates
          react: {
            singleton: true,
            requiredVersion: false,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: false,
          },
        },
      }),
    );
    
    return config;
  },
};

export default nextConfig;

