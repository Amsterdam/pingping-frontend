<template>
  <div>
    <AppHeaderMenu :class="['page-' + $route.name]" />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppHeaderMenu from '~/components/AppHeaderMenu'
import AppFooter from '~/components/AppFooter'

export default {
  name: 'default',
  components: {
    AppHeaderMenu,
    AppFooter
  }
}
</script>

<style lang="scss">
@import "~assets/scss/style";
</style>
