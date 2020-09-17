<template>
  <b-button
    class="core-button"
    @click="onClick"
  >{{ label }}</b-button>
</template>

<script>
import VueTypes from 'vue-types'

export default {
  name: 'CoreButton',

  props: {
    label: VueTypes.string.def('')
  },

  methods: {
    onClick (e) {
      this.$emit('onClick', e)
    }
  }
}
</script>

<style lang="scss">
.core-button {
  border-radius: 23px;
  box-shadow: 0 2px 6px 0 rgba(203, 203, 203, 0.4);
  border: solid 1px #fb9f4b;
  background-color: #fb9f4b;

  &.button.is-rounded {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  span {
    font-weight: bold;
    letter-spacing: 0.8px;
  }
}
</style>
