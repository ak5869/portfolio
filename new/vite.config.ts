import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // 🔧 Change '/portfolio/' to match your GitHub repo name exactly
  // If your repo is username.github.io, set base: '/'
  base: '/portfolio/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
