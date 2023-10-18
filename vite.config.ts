import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { setFlagsFromString } from 'node:v8'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // proxy: {
    //   '/api': {
    //     // target:"https://fe2kao.tiaozhan.com/",
    //     target:"https://fe2kao.tiaozhan.com/",
    //     changeOrigin:true,
    //     secure:false
    //   }
    // }
    proxy: {
      '/api':{
        target:"http://localhost:",
        changeOrigin:true,
        secure:false
      }
    }
  }
})
