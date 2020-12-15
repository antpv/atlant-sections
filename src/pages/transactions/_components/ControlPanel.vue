<template>
  <div class="control-panel">
    <Button @click="onOpenSocket" type="primary">Start</Button>
    <Button @click="destroyConnection" type="danger">Stop</Button>
    <Button type="warning">Reset</Button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Button } from '../../../components'

export default {
  name: 'ControlPanel',

  components: {
    Button
  },

  methods: {
    ...mapActions('transactions', ['openConnection', 'destroyConnection']),

    onOpenSocket() {
      this.openConnection({ wsUri: 'wss://ws.blockchain.info/inv' })
    }
  }
}
</script>

<style lang="scss" scoped>
.control-panel {
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 0 auto;
}
</style>
