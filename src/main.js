import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/_main.scss'

Vue.config.productionTip = false

const application = new Vue({
  router,
  store,
  render: h => h(App)
})

application.$mount('#app')
