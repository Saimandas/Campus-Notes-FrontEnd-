import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
const port = import.meta.env.VITE_PORT
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/users":"http://localhost:3000/api/v1"
    },
    port:port
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
