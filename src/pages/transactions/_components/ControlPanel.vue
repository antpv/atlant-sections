<template>
  <div class="control-panel">
    <Button type="primary">Start</Button>
    <Button type="danger">Stop</Button>
    <Button type="warning">Reset</Button>
  </div>
</template>

<script>
import { Button } from '../../../components'

export default {
  name: 'ControlPanel',

  components: {
    Button
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
