import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import axiosPlugin from './axios.js'
import routerDefault from "./router/index.js"
import './assets/tailwindCompiled.css'

let routerPathLocalStorage = localStorage.getItem('routerPath')

let routerDynamic = null
try {
  routerDynamic = (await import(routerPathLocalStorage)).default;
  console.log("PRINTING DYNAMIC AFTER ASSIGNMENT", routerDynamic);
} catch (error) {
  console.log("ERROR, RESAULTING TO DEFAULT ROUTER")
  routerDynamic = routerDefault;
}

const app = createApp(App)

app.use(axiosPlugin)

app.use(createPinia())
app.use(routerDynamic)

app.mount('#app')

