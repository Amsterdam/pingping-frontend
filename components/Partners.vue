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
export default {
  name: 'Partners',

  data () {
    return {
      items: [
        {
          image: 'artis',
          logoImage: 'artis-logo'
        },
        {
          image: 'artis',
          logoImage: 'artis-logo'
        },
        {
          image: 'artis',
          logoImage: 'artis-logo',
          link: 'https://www.artis.nl/en/'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
