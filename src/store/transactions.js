import TransactionsSocketClient from '../services/transactionsSocketClient'

const state = {
  transactions: [],
  transactionsSocketClient: null
}

const mutations = {
  updateTransactions(state, transactions) {
    console.log(transactions)
  },

  saveTransactionsSocketClient(state, client) {
    state.transactionsSocketClient = client
  }
}

const actions = {
  handleTransactions(context, message) {
    console.log(message)
  },

  openConnection({ commit, dispatch }, { wsUri }) {
    const client = new TransactionsSocketClient({
      wsUri,
      onMessage: event => dispatch('handleTransactions', event)
    })

    commit('saveTransactionsSocketClient', client)

    client
      .init()
      .then(() => {
        client.send({ 'op': 'unconfirmed_sub'})
      })
  },

  destroyConnection({ commit, state }) {
    if (state.transactionsSocketClient) {
      state.transactionsSocketClient.destroy()

      commit('saveTransactionsSocketClient', null)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
