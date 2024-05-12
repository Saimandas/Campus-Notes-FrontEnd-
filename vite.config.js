import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// Define the port directly or use a default value
const port = import.meta.env.VITE_PORT || 3000

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/users":"https://campusnotes-backend-1.onrender.com/api/v1"
    },
    port: port
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
