import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  base: './',
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: "./dist",
    emptyOutDir: true,
  },
  css: {
    postcss: path.resolve(__dirname, 'postcss.config.js'),
  },
})