<template>
  <CoreActionBox>
    <div class="row">
      <div class="col-2 figure-column">
        <img
          class="figure"
          src="~assets/images/fig.png"
          alt="figure"
        >
      </div>
      <div class="col-5 content-column">
        <div class="h2">Download nu de app om jouw doelen te bereiken!</div>
      </div>
      <div class="col-5 action-column">
        <StoreLogos />
      </div>
    </div>
  </CoreActionBox>
</template>

<script>
import CoreActionBox from './CoreActionBox'
import StoreLogos from './StoreLogos'

export default {
  name: 'DownloadNow',

  components: {
    CoreActionBox,
    StoreLogos
  }
}
</script>

<style lang="scss">
</style>
