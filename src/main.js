import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './css/main.css'
import './css/bootstrap.min.css'
import './js/bootstrap.min.js'
import 'animate.css'

createApp(App)
  .use(router)
  .mount('#app')
