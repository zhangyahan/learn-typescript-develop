import { defineConfig } from 'vite'
import path from 'path'


export default defineConfig({
  resolve: {
    alias: {
      '@': path.relative(__dirname, 'src')
    }
  },
  build: {
    rollupOptions: {
      input: {
        'intersection-observer': path.resolve(__dirname, 'intersection-observer.html'),
      }
    }
  }
})