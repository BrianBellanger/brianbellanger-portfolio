import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages deployment, uncomment and set base to your repo name:
// base: '/your-repo-name/',
export default defineConfig({
  plugins: [react()],
})
