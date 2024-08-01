import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@store': path.resolve(__dirname, 'src/store'),
      '@apis': path.resolve(__dirname, 'src/apis'),
    },
  },
})
