<template>
  <section class="partners">
    <div class="container">
      <p class="h2 text-md-center mb-4">
        Onze Partners
      </p>
      <div class="row">
        <PartnerCard
          class="col-4"
          v-for="(partner, p) in items"
          :key="'parnter-' + p"
          v-bind="partner"
        />
      </div>
    </div>
  </section>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'Partners',

  props: {
    items: VueTypes.arrayOf(Object)
  }
}
</script>

<style lang="scss" scoped>
</style>
