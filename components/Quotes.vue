<template>
  <div>
    <quote-item v-bind="items[current]" />
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import QuoteItem from './QuoteItem'

export default {
  name: 'Quotes',

  props: {
    items: VueTypes.arrayOf(Object)
  },

  components: {
    QuoteItem
  },

  data () {
    return {
      current: 0
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
