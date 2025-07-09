import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // "/api": {
      //   target:"https://campusnotes-backend-production.up.railway.app/api/v1",
      //   changeOrigin: true,
      // }
    },
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
