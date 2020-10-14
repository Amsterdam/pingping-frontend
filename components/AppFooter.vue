<template>
  <div class="app-footer pb-4">
    <div class="h1 text-white text-center pt-4">Ping Ping</div>
    <div class="text-center text-white pt-4 h4">Gemeente Amsterdam</div>
    <div class="text-center text-pingping pt-3 h4">
      <a href="http://amsterdam.nl/privacy">pricacybeleid</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss">
@import "~assets/scss/variables";
@import "bootstrap/scss/_functions.scss";
@import "bootstrap/scss/_variables.scss";
@import "bootstrap/scss/_mixins.scss";

.app-footer {
  background-color: #0d2036;

  .h1 {
    letter-spacing: 24.84px;
  }
}

@include media-breakpoint-down(sm) {
  .app-footer {
    .h1 {
      letter-spacing: 9.66px;
    }
  }
}
</style>
