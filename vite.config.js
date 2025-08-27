import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        "over-mij": resolve(__dirname, 'over-mij.html'),
        "mijn-visie": resolve(__dirname, 'mijn-visie.html'),
        contact: resolve(__dirname, 'contact.html'),
        werkwijze: resolve(__dirname, 'werkwijze.html'),
        tarieven: resolve(__dirname, 'tarieven.html'),
        privacyverklaring: resolve(__dirname, 'privacyverklaring.html'),
        klachten: resolve(__dirname, 'klachten.html'),
        404: resolve(__dirname, '404.html'),
      }
    }
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
    }),
  ],
})