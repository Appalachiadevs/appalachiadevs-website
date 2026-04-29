import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    // Cursor often listens on 127.0.0.1:5173; use a different port so localhost resolves correctly.
    port: 5180,
    strictPort: false,
  },
})
