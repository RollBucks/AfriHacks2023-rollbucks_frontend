import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://rollbucks.github.io/AfriHacks2023-rollbucks_frontend/"
})
