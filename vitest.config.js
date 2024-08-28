import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/setup.ts',
    exclude: [
      '**/node_modules/**',  
      '**/dist/**',          
      '**/config/**',        
      '**/*.config.js',      
      '**/*.config.ts',
    ],
  },
})