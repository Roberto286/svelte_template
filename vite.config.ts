import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from "node:path"

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/*": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages")
    }
  },
  plugins: [svelte()]
})
