<template>
  <div class="transactions">
    <ControlPanel />
    <TransactionList :totalSum="1000" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ControlPanel from './_components/ControlPanel'
import TransactionList from './_components/TransactionList'

export default {
  name: 'Transactions',

  components: {
    ControlPanel,
    TransactionList
  },

  computed: {
    ...mapState('transactions', {
      transactions: state => state.transactions
    })
  },

  watch: {
    transactions: {
      immediate: true,
      handler(transactions) {
        console.log(transactions)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.transactions {
  display: flex;
  flex-direction: column;
}
</style>
