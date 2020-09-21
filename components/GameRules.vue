<template>
  <CoreSplitDisplay class="game-rules">
    <template>
      <div class="h2 mb-3">Spelregels citypings</div>
      <div class="game-rules__rule mb-5">
        <img
          src="~assets/images/coin.png"
          alt="coin"
        >
        <div class="h4 pl-3"><span class="font-weight-bold">City Pings</span> verdien je door gebruik te maken van Ping Ping en persoonlijke routes af te leggen.</div>
      </div>
      <div class="game-rules__rule mb-5">
        <img
          src="~assets/images/coin.png"
          alt="coin"
        >
        <div class="h4 pl-3"><span class="font-weight-bold">City Pings</span> worden verdeeld over de verschillende stappen in je persoonlijke route.</div>
      </div>
      <div class="game-rules__rule mb-5">
        <img
          src="~assets/images/coin.png"
          alt="coin"
        >
        <div class="h4 pl-3"><span class="font-weight-bold">City Pings</span> verdien je door gebruik te maken van Ping Ping en persoonlijke routes af te leggen.</div>
      </div>
      <div class="game-rules__rule mb-5">
        <img
          src="~assets/images/coin.png"
          alt="coin"
        >
        <div class="h4 pl-3"><span class="font-weight-bold">City Pings</span> verdien je door gebruik te maken van Ping Ping en persoonlijke routes af te leggen.</div>
      </div>
      <div class="game-rules__rule mb-5">
        <img
          src="~assets/images/coin.png"
          alt="coin"
        >
        <div class="h4 pl-3"><span class="font-weight-bold">City Pings</span> verdien je door gebruik te maken van Ping Ping en persoonlijke routes af te leggen.</div>
      </div>
    </template>
  </CoreSplitDisplay>
</template>

<script>
import CoreSplitDisplay from './CoreSplitDisplay'

export default {
  name: 'GameRules',

  components: {
    CoreSplitDisplay
  },

  data () {
    return {
      activeItem: 0,
      items: []
    }
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
