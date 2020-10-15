<template>
  <CoreSplitDisplay class="game-rules">
    <template>
      <div class="h2 mb-3">Spelregels citypings</div>
      <nuxt-content :document="$props" />
    </template>
  </CoreSplitDisplay>
</template>

<script>
import VueTypes from 'vue-types'
import CoreSplitDisplay from './CoreSplitDisplay'

export default {
  name: 'GameRules',

  components: {
    CoreSplitDisplay
  },

  props: {
    title: VueTypes.string.def(''),
    items: VueTypes.any.def(null),
    body: VueTypes.any
  }
}
</script>

<style lang="scss">
.game-rules {
  position: relative;

  ul {
    list-style: none;
    padding: 0;
    li {
      position: relative;
      font-size: 1.25rem;
      margin-bottom: 2rem;
      padding-left: 4rem;

      &:before {
        background: transparent url("~assets/images/coin.png") scroll 0 0 no-repeat;
        content: "";
        width: 50px;
        height: 50px;
        position: absolute;
        left: 0;
        top: 8px;
      }
    }
  }

  &__rule {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .h4 {
      padding-left: 1rem;
    }

    img {
      object-fit: contain;
    }
  }
}
</style>
