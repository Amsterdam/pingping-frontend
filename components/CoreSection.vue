<template>
  <section class="core-section">
    <div class="container">
      <div>
        <p class="overtitle text-md-center" v-if="overtitle">
          {{ overtitle }}
        </p>

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
    overtitle: VueTypes.string.def(''),
    title: VueTypes.string.def(''),
    subtitle: VueTypes.string.def(''),
    undertitle: VueTypes.string
  }
}
</script>

<style lang="scss">
.core-section {
  .overtitle {
    color: #FB9F4B;
    font-size: 22px;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .content-slot {
    img {
      object-fit: contain;
      max-width: 100%;;
    }
  }
}
</style>
