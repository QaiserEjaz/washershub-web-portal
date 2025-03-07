import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/washershub-web-portal/',
  server: {
    port: 3000,
    strictPort: true
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})