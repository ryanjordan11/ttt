import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        guide: resolve(__dirname, 'guide.html'),
        guideDay1: resolve(__dirname, 'guide-day1.html'),
        guideDay2: resolve(__dirname, 'guide-day2.html'),
        guideDay3: resolve(__dirname, 'guide-day3.html'),
        guideDay4: resolve(__dirname, 'guide-day4.html'),
        guideDay5: resolve(__dirname, 'guide-day5.html'),
        step2: resolve(__dirname, 'step2.html'),
        step3: resolve(__dirname, 'step3.html'),
        step4: resolve(__dirname, 'step4.html'),
        step5: resolve(__dirname, 'step5.html'),
        fullReset: resolve(__dirname, 'full-reset.html'),
      },
    },
  },
})
