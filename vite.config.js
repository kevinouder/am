import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        "over-mij": resolve(__dirname, 'over-mij.html'),
        privacyverklaring: resolve(__dirname, 'privacyverklaring.html'),
        klachten: resolve(__dirname, 'klachten.html')
      }
    }
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
    }),
  ],
})