<template>
  <div class="quote-item p-4">
    <div class="quote-item__image text-center mb-4">
      <img :srcset="imageSource">
    </div>
    <div class="quote-item__quote text-center mb-4 h4">“{{ quote }}”</div>
    <div class="quote-item__title text-center">- {{ title }}</div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'

export default {
  name: 'QuoteItem',

  props: {
    image: VueTypes.string.def(''),
    quote: VueTypes.string.def(''),
    title: VueTypes.string.def('')
  },

  computed: {
    imageSource () {
      return require('~/assets/images/quotes/' + this.image + '.png')
    }
  }
}
</script>

<style lang="scss">
.quote-item {
  &__quote {
    font-family: Raleway;
    font-size: 1.25rem;
    font-weight: 500;
    font-style: italic;
    line-height: 1.2;
  }

  &__title {
    font-family: Raleway;
    font-weight: bold;
    text-align: justify;
  }

  .--John-Doe-Student-Copy {
  }
}
</style>
