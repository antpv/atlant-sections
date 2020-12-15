import Vue from 'vue'
import App from './App.vue'
import './assets/scss/_main.scss'

Vue.config.productionTip = false

const application = new Vue({
  render: h => h(App)
})

application.$mount('#app')
