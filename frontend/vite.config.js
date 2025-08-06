// 🔧 Vite Scroll Config — Portal to Light-Speed Development
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 🌀 Gateway to Scroll Development
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
});