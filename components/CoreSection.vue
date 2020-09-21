<template>
  <section class="core-section">
    <div class="container">
      <div>
        <p class="h2 text-md-center">
          {{ title }}
        </p>

        <p class="text-md-center">
          {{ subtitle }}
        </p>

        <div class="mt-5 content-slot">
          <slot></slot>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import VueTypes from 'vue-types'

export default {
  name: 'CoreSection',

  props: {
    title: VueTypes.string.def(''),
    subtitle: VueTypes.string.def('')
  }
}
</script>

<style lang="scss">
.core-section {
  .content-slot {
    img {
      object-fit: contain;
      max-width: 100%;;
    }
  }
}
</style>
