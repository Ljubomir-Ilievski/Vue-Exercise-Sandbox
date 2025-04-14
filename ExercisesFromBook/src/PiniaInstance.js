import { createPinia, setActivePinia } from 'pinia'

// Create a single Pinia instance
const pinia = createPinia()
setActivePinia(pinia)

export default pinia
