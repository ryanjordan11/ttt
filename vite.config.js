import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        step2: resolve(__dirname, 'step2.html'),
        step3: resolve(__dirname, 'step3.html'),
        step4: resolve(__dirname, 'step4.html'),
        step5: resolve(__dirname, 'step5.html'),
        fullReset: resolve(__dirname, 'full-reset.html'),
      },
    },
  },
})
