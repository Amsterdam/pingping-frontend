
<template>
  <a
    :href="link"
    target="_blank"
    class="partner-card"
  >
    <div class="partner-card__inner">
      <div
        class="partner-card__image"
        :style="style"
      >
        <!-- <img
        :srcset="imageSource"
        alt="partner-image"
      > -->
      </div>
      <div class="partner-card__logo">
        <img
          :srcset="logoSource"
          alt="partner-logo"
        >
      </div>
    </div>
  </a>
</template>

<script>
import VueTypes from 'vue-types'

export default {
  name: 'PartnerCard',

  props: {
    logoImage: VueTypes.string.def(null),
    image: VueTypes.string.def(null),
    link: VueTypes.string.def('#')
  },

  computed: {
    imageSource () {
      return require('~/assets/images/partners/' + this.image + '.png')
    },

    style () {
      const res = {
        'background-image': 'url("' + this.imageSource + '")'
      }

      if (!this.link) {
        res.cursor = 'none'
      }

      return res
    },

    logoSource () {
      return require('~/assets/images/partners/' + this.logoImage + '.png')
    }
  }
}
</script>

<style lang="scss">
.partner-card {
  $border-radius: 10px;
  position: relative;
  padding: 0 1.5rem;
  margin-bottom: 2rem;

  &__inner {
    position: relative;
  }

  &__image {
    opacity: 0.5;
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
    height: 20rem;
    background-size: cover;
  }

  &__logo {
    position: absolute;
    display: flex;
    justify-content: center;
    border-top: 0.3rem solid #2dbcca;
    bottom: 0;
    background-color: white;
    width: 100%;
    margin: auto;
    bottom: -1.5rem;
    margin-bottom: 1rem;
    box-shadow: 0 2px 6px 0 rgba(203, 203, 203, 0.4);
    border-bottom-right-radius: $border-radius;
    border-bottom-left-radius: $border-radius;

    img {
      padding: 1rem;
    }
  }
}
</style>
