import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/flagguessr/",
  plugins: [svelte()],
  server: {
    watch: {
      usePolling: true
    }
  }
})
