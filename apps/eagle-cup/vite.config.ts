import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import logResolvedPathsPlugin from './src/plugins/resolvedPathPlugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), logResolvedPathsPlugin()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@apis': path.resolve(__dirname, 'src/apis'),


      "@atoms": path.resolve(__dirname, '../../packages/shared/atoms'),
      "@molecules": path.resolve(__dirname, '../../packages/shared/molecules'),
      "@organisms": path.resolve(__dirname, '../../packages/shared/organisms'),
      "@templates": path.resolve(__dirname, '../../packages/shared/templates'),
      "@shared/api": path.resolve(__dirname, '../../packages/shared/api'),
      "@shared/utils": path.resolve(__dirname, '../../packages/shared/utils'),
      "@shared/types": path.resolve(__dirname, '../../packages/shared/types'),
      "@shared/constants": path.resolve(__dirname, '../../packages/shared/constants'),
    },
  },
})
