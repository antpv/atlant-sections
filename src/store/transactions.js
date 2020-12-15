const state = {
  transactions: []
}

const mutations = {
  updateTransactions(state, transactions) {
    console.log(transactions)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
