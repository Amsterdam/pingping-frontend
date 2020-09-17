<template>
  <div>
    <AppHeaderMenu :class="['page-' + $route.name]" />
    <Nuxt />
  </div>
</template>

<script>
import AppHeaderMenu from '~/components/AppHeaderMenu'

export default {
  name: 'default',
  components: {
    AppHeaderMenu
  }
}
</script>

<style lang="scss">
@import "~assets/scss/style";
</style>
