<template>
  <div class="phone-frame">
    <img
      src="~assets/images/frame.png"
      alt="frame"
      class="phone-frame__img"
    />
  </div>
</template>

<script>
export default {
  name: 'PhoneFrame'
}
</script>

<style lang="scss">
@import "bootstrap/scss/_functions.scss";
@import "bootstrap/scss/_variables.scss";
@import "bootstrap/scss/_mixins.scss";

.phone-frame {
  img {
    max-width: 24rem;
    max-height: 38rem;
  }

  @include media-breakpoint-down(md) {
    margin: auto;

    img {
      padding: 2rem;
      max-width: 90%;
      margin: auto;
    }
  }
}
</style>
