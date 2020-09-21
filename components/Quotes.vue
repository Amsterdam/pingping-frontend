<template>
  <div>
    <quote-item v-bind="items[current]" />
  </div>
</template>

<script>
import QuoteItem from './QuoteItem'

export default {
  name: 'Quotes',

  components: {
    QuoteItem
  },

  data () {
    return {
      current: 0,
      items: [
        {
          image: 'johm-kan-71-ngi-xcd-tz-e-unsplash',
          quote: 'Met PingPing bieden we je een persoonlijke routeplanner om op een leuke en makkelijke manier je (financiële) vaardigheden te verbeteren en je basis op orde te brengen.',
          title: 'John Doe, Student aan de Hogeschool van Amsterdam'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
