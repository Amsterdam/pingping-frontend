<template>
  <div class="core-item-card mb-5">
    <div class="item-image-wrapper">
      <img :srcset="imageSource">
    </div>

    <div class="h3 text-center">{{ title }}</div>
    <div class="text-center">{{ subtitle }}</div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'

export default {
  name: 'CoreItemCard',

  props: {
    image: VueTypes.string,
    title: VueTypes.string.def(''),
    subtitle: VueTypes.string.def('')
  },

  computed: {
    imageSource () {
      return this.image
    }
  }
}
</script>

<style lang="scss">
.core-item-card {
  .item-image-wrapper {
    display: flex;
    img {
      max-height: 75px;
      margin: auto;
      margin-bottom: 20px;
    }
  }
}
</style>
