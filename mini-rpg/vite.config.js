import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src/main',
  plugins: [react()],
  publicDir: '../../public',
  build: {
    outDir: '../../dist',
    emptyOutDir: true
  }
})