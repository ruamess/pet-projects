import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Пример алиаса для папки src
      '@modules': path.resolve(__dirname, 'src/modules'), // Путь к папке с вашими модулями
    },
  },
})
