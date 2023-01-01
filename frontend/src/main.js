import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Statement from './views/StatementView.vue'

const router = createRouter({  
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Statement', component: Statement },
  ]
})

createApp(App)
.use(router)
.mount('#app')
