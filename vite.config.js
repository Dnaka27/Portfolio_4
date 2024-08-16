<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio_4/', // Adicione essa linha
  plugins: [react()],
});
>>>>>>> c514c9a6650de453244897fcb33aa5f34b8dcdd9
