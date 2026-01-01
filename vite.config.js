import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',   // ✅ REQUIRED FOR CLOUDFLARE
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    fs: {
      strict: false
    }
  },
  assetsInclude: ['**/*.glb', '**/*.gltf']
})
