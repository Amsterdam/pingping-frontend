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
        <div class="h2">{{ label }}</div>
      </div>
      <div class="col-5 action-column">
        <StoreLogos class="text-right" />
      </div>
    </div>
  </CoreActionBox>
</template>

<script>
import VueTypes from 'vue-types'
import CoreActionBox from './CoreActionBox'
import StoreLogos from './StoreLogos'

export default {
  name: 'DownloadNow',

  components: {
    CoreActionBox,
    StoreLogos
  },

  props: {
    label: VueTypes.string.def('Download nu de app om jouw doelen te bereiken!')
  }
}
</script>

<style lang="scss">
</style>
