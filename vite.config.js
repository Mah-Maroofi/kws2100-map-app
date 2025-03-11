import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/kws2100-map-app/', // Viktig for GitHub Pages!
});
