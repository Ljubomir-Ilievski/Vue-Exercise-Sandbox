//import './assets/main.css'
import './assets/tailwindCompiled.css'

import { createApp } from 'vue'
//import { createPinia } from 'pinia'

import pinia from '@/PiniaInstance.js'

import App from './App.vue'
import router from './router'


const app = createApp(App)

/*app.use(VueMonacoEditorPlugin, {
  paths: {
    // You can change the CDN config to load other versions
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs'
  },

})*/

app.use(pinia)
app.use(router)

app.mount('#app')
