<template>
  <CoreSplitDisplay :reverse="true">
    <template>
      <div class="h2 mb-3">Wij geloven in de vier principes</div>

      <AccordionItem
        v-for="(item, i) in items"
        :key="'item-' + i"
        v-bind="item"
        @click.native="activeItem = i"
        :active="i === activeItem"
      />
    </template>
    <template slot="frame">
      <PhoneFrame :image="activeImage" />
      <img
        src="~assets/images/rocket.png"
        alt="rocket"
        class="frame__side-image"
      />
    </template>
  </CoreSplitDisplay>
</template>

<script>
import _ from 'lodash'
import AccordionItem from './AccordionItem'
import PhoneFrame from './PhoneFrame'
import CoreSplitDisplay from './CoreSplitDisplay'
import VueTypes from 'vue-types'

export default {
  name: 'AccordionDisplay',

  components: {
    AccordionItem,
    PhoneFrame,
    CoreSplitDisplay
  },

  props: {
    items: VueTypes.arrayOf(Object)
  },

  computed: {
    activeImage () {
      return this.items[this.activeItem + '.image']
    }
  },

  data () {
    return {
      activeItem: 0
    }
  }
}
</script>

<style lang="scss" scope>
</style>
