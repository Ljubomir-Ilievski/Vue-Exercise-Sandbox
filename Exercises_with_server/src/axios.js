import axios from 'axios'
export default {
  install(app) {
    app.config.globalProperties.$axios = axios
    app.config.globalProperties.$baseUrl = "https://jsonplaceholder.typicode.com"
    app.provide('axios', axios)
  }
}
