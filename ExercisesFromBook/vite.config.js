import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
/*import monacoEditorPlugin from 'vite-plugin-monaco-editor';*/


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
   // vueDevTools(),
    tailwindcss(),
    /*monacoEditorPlugin({
      languageWorkers: ['typescript']
    }),*/
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
       vue: 'vue/dist/vue.esm-bundler.js'
    },
  },
  server: {
    port: 5174,
    host: process.env.HOST || 'localhost'
  }

})
