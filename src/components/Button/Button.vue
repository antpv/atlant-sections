<template>
  <button
    v-on="$listeners"
    class="button"
    :class="`button-${type}`"
  >
    <span class="button__content">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    type: {
      type: String,
      default: 'primary',
      validator(color) {
        return ['primary', 'warning', 'danger'].includes(color)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_colors.scss';
@import '../../assets/scss/_typografy.scss';
@import '../../assets/scss/_sizes.scss';

.button {
  font-size: $font-size-m;
  font-family: $font-family;
  color: $font-color;
  padding: $offset-m $offset-l;
  display: inline-block;
  font-weight: $font-weight-l;
  border-radius: $border-radius-m;
  cursor: pointer;
  outline: 0;
  box-sizing: border-box;
  border: 0;

  &-primary {
    background-color: $primary-color;
  }

  &-danger {
    background-color: $danger-color;
  }

  &-warning {
    background-color: $warning-color;
  }
}
</style>
