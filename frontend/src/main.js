import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Home from './views/HomeView.vue'

const router = createRouter({  
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
  ]
})

createApp(App)
.use(router)
.mount('#app')
