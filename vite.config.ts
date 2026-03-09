import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@sections': path.resolve(__dirname, './src/sections'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@data': path.resolve(__dirname, './src/data'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation': ['framer-motion'],
          'charts': ['recharts'],
          'particles': ['@tsparticles/react', '@tsparticles/slim'],
          'emailjs': ['@emailjs/browser'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
    sourcemap: false,
  },

  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
});
