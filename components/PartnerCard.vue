
<template>
  <div class="partner-card">
    <div class="partner-card__inner">
      <div class="partner-card__logo" :style="style">
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
    logo: VueTypes.string,
    color: VueTypes.string.def('#ffffff')
  },

  computed: {
    style () {
      const res = {
        'background-color': this.color,
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

  &__logo {
    display: flex;
    justify-content: center;
    bottom: 0;
    width: 100%;
    box-shadow: 0 2px 6px 0 rgba(203, 203, 203, 0.4);
    border-radius: $border-radius;

    img {
      padding: 0.5rem;
      max-width: 100%;
      width: 268px;
      min-height: 200px;
      max-height: 200px;
      object-fit: contain;
    }
  }
}
</style>
