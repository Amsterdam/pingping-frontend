<template>
  <div class="phone-frame">
    <div class="phone-frame__screenshot">
      <img
        :srcset="screenshot"
        :alt="screenshot"
      />
    </div>
    <img
      src="~assets/images/frame.png"
      alt="frame"
      class="phone-frame__frame"
    />

  </div>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'PhoneFrame',

  props: {
    image: VueTypes.string.def('route1')
  },

  computed: {
    frame () {
      return require('~/assets/images/frame.png')
    },

    screenshot () {
      return require('~/assets/images/screens/' + this.image + '.png')
    }
  }
}
</script>

<style lang="scss">
@import "bootstrap/scss/_functions.scss";
@import "bootstrap/scss/_variables.scss";
@import "bootstrap/scss/_mixins.scss";

.phone-frame {
  position: relative;
  z-index: 10;

  &__screenshot {
    z-index: 10;
    position: absolute;
    max-width: 100%;
    overflow: hidden;
    max-width: 22rem;
    max-height: 33rem;
    padding-top: 12px;
    padding-right: 63px;
    padding-left: 50px;

    img {
      object-fit: contain;
      width: 100%;
    }
  }

  &__frame {
    position: relative;
    z-index: 20;
    max-width: 24rem;
    max-height: 37rem;
  }

  @include media-breakpoint-down(md) {
    margin: auto;

    &__frame {
      max-width: 20rem;
      max-height: 28rem;
      margin: auto;
    }

    &__screenshot {
      padding-top: 24px;
      padding-right: 68px;
      padding-left: 60px;
    }
  }

  @include media-breakpoint-down(sm) {
    &__screenshot {
    padding-top: 11px;
    padding-right: 48px;
    padding-left: 39px;
    }
  }
}
</style>
