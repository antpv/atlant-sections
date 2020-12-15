import Vue from 'vue'
import Router from 'vue-router'
import Transactions from './pages/transactions'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      name: Transactions.name,
      path: '/transactions',
      component: Transactions
    }
  ]
})
