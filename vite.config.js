import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio_4/', // Adicione essa linha
  plugins: [react()],
});
