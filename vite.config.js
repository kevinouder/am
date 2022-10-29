import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacyverklaring: resolve(__dirname, 'privacyverklaring.html'),
        klachten: resolve(__dirname, 'klachten.html')
      }
    }
  }
})