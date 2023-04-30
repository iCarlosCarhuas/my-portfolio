import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' 

export default defineConfig({
	plugins: [react()],
	optimizeDeps: {
    exclude: ['emailjs-com'],
  },
  	build: {
    assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.gif', '**/*.webp'],
  },
});