<template>
  <section class="core-section">
    <div class="container">
      <div>
        <p class="h2 text-center">
          {{ title }}
        </p>

        <p class="text-center">
          {{ subtitle }}
        </p>

        <div class="mt-5">
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
}
</style>
