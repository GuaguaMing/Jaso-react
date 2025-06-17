import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Jaso-react/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('html2canvas')) return 'html2canvas';
            if (id.includes('recharts')) return 'recharts';
            return 'vendor';
          }
        },
      },
    },
  },
})
