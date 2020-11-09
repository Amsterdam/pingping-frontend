
<template>
  <div class="partner-card">
    <div class="partner-card__inner">
      <div
        class="partner-card__image"
        :style="style"
      >
        <img
          v-if="image"
          :srcset="image"
          alt="partner-image"
        >
      </div>
      <div class="partner-card__logo">
        <img
          :srcset="logo"
          alt="partner-logo"
        >
      </div>
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'

export default {
  name: 'PartnerCard',

  props: {
    logo: VueTypes.string.def(null),
    image: VueTypes.string.def(null),
    link: VueTypes.string.def('#')
  },

  computed: {
    style () {
      const res = {
        'background-image': 'url("' + this.imageSource + '")'
      }

      if (!this.link) {
        res.cursor = 'none'
      }

      return res
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
  padding-bottom: 2rem;

  &__inner {
    position: relative;
  }

  &__image {
    opacity: 0.5;
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
    height: 20rem;
    background-size: cover;

    img {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
      max-width: 100%;
      width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
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
    bottom: -3rem;
    margin-bottom: 1rem;
    box-shadow: 0 2px 6px 0 rgba(203, 203, 203, 0.4);
    border-bottom-right-radius: $border-radius;
    border-bottom-left-radius: $border-radius;

    img {
      padding: 0.5rem;
      max-width: 100%;
      height: 5rem;
      object-fit: contain;
    }
  }
}
</style>
