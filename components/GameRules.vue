<template>
  <CoreSplitDisplay class="game-rules">
    <template>
      <div class="h2 mb-3">Spelregels citypings</div>
       <div class="game-rules__rule mb-5">
        <img
          src="~assets/images/coin.png"
          alt="coin"
        >
        <div class="h4 pl-3"><span class="font-weight-bold">City Pings</span> verdien je door gebruik te maken van ping Ping en je persoonlijke route af te leggen.</div>
      </div>
       <div class="game-rules__rule mb-5">
        <img
          src="~assets/images/coin.png"
          alt="coin"
        >
        <div class="h4 pl-3"><span class="font-weight-bold">City Pings</span> zijn verdeeld over de verschillende stappen die je kunt doorlopen.</div>
      </div>
       <div class="game-rules__rule mb-5">
        <img
          src="~assets/images/coin.png"
          alt="coin"
        >
        <div class="h4 pl-3"><span class="font-weight-bold">City Pings</span> die je hebt verdiend door je route af te ronden wissel je in voor een beloning.</div>
      </div>
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
    items: VueTypes.any.def(null)
  }
}
</script>

<style lang="scss">
.game-rules {
  position: relative;

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
