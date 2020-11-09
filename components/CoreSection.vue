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

        <p class="text-md-center" v-if="undertitle">
          {{ undertitle }}
        </p>
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
    subtitle: VueTypes.string.def(''),
    undertitle: VueTypes.string.def(null)
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
