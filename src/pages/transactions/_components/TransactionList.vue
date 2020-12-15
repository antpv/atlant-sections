<template>
  <div class="transaction-list">
    <div class="transaction-list__header">
      Total sum: {{ totalSum }} BTC
    </div>

    <div class="transaction-grid">
      <div class="transaction-grid-from transaction-grid-from--title">
        From
      </div>
      <div class="transaction-grid-to transaction-grid-to--title">
        To
      </div>
      <div class="transaction-grid-sum transaction-grid-sum--title">
        Sum
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransactionList',

  props: {
    totalSum: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/_sizes.scss';
@import '../../../assets/scss/_typografy.scss';
@import '../../../assets/scss/_colors.scss';

.transaction-list {
  padding: $offset-xl;

  &__header {
    margin-bottom: $offset-l;
    font-weight: $font-weight-l;
    text-align: center;
  }
}

.transaction-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  &-from,
  &-to,
  &-sum {
    border-bottom: $border-size-s solid $border-light-color;
    text-align: center;
    padding: $offset-m;

    &--title {
      font-weight: $font-weight-l;
    }
  }
}
</style>
