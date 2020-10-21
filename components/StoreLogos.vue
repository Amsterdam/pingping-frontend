<template>
  <p class="store-logos">
    <a :href="appleLink">
      <img
        src="~assets/images/apple.png"
        alt="app store" />
    </a>
    <a :href="googleLink">
      <img
        src="~assets/images/google.png"
        alt="google play"
      />
    </a>
  </p>
</template>

<script>
export default {
  name: 'StoreLogos',

  async mounted () {
    const { appleLink, googleLink } = await this.$content('config').only(['appleLink', 'googleLink']).fetch()

    this.appleLink = appleLink
    this.googleLink = googleLink
  },

  data () {
    return {
      appleLink: '',
      googleLink: ''
    }
  }
}
</script>

<style lang="scss">
@import "bootstrap/scss/_functions.scss";
@import "bootstrap/scss/_variables.scss";
@import "bootstrap/scss/_mixins.scss";

.store-logos {
  margin: auto;

  img {
    max-height: 3.4rem;
    max-width: 10rem;
    margin-right: 1rem;
  }
}

@include media-breakpoint-down(md) {
  .store-logos {
    img {
      max-height: 2.5rem;
      margin-bottom: 1rem;
      margin-right: 0;
    }
  }
}
</style>
