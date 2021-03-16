import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 完整引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 引入全局api
import api from '@/api'
Vue.prototype.api = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
