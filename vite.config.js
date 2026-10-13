import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // The prerenderer runs through vite-node, which resolves asset imports to
  // their source paths. The manifest lets it rewrite those to the hashed
  // filenames Vite actually emits.
  build: { manifest: true },
})
