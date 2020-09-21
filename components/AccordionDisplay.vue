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
      <PhoneFrame />
      <img
        src="~assets/images/rocket.png"
        alt="rocket"
        class="frame__side-image"
      />
    </template>
  </CoreSplitDisplay>
</template>

<script>
import AccordionItem from './AccordionItem'
import PhoneFrame from './PhoneFrame'
import CoreSplitDisplay from './CoreSplitDisplay'

export default {
  name: 'AccordionDisplay',

  components: {
    AccordionItem,
    PhoneFrame,
    CoreSplitDisplay
  },

  data () {
    return {
      activeItem: 0,
      items: [
        {
          title: '1. Stapsgewijs & Doelgericht'
        },
        {
          title: '2. Loyalty Programma'
        },
        {
          title: '3. Context Based Servicing'
        },
        {
          title: '4. Community'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scope>
</style>
