import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        step2: resolve(__dirname, 'step2.html'),
        step3: resolve(__dirname, 'step3.html'),
      },
    },
  },
})
