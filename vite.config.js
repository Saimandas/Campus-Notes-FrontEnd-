import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/users": "https://campusnotes-backend-production.up.railway.app/api/v1/users/"
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
