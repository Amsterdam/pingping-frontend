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

export default {
  name: 'AccordionDisplay',

  components: {
    AccordionItem,
    PhoneFrame,
    CoreSplitDisplay
  },

  computed: {
    activeImage () {
      return _.get(this.items, this.activeItem + '.image')
    }
  },

  data () {
    return {
      activeItem: 0,
      items: [
        {
          title: '1. Stapsgewijs en doelgericht.',
          icon: 'map-marker-outline',
          image: 'routeOverview',
          points: [
            'Overzichtelijke route in kleine behapbare stappen om een doel te bereiken.',
            'Gefaseerde informatie (per stap in de route)',
            'Visueel en actiegericht.'
          ]
        },
        {
          title: '3. Context Based Servicing',
          icon: 'comment-question-outline',
          image: 'zorg',
          points: [
            'Gepersonaliseerde informatie.',
            'De juiste info, op het juiste moment.'
          ]
        },
        {
          title: '2. Loyalty Programma',
          icon: 'close-circle-multiple-outline',
          image: 'rewards',
          points: [
            'Vorderingen in de route worden zichtbaar.',
            'Door successen te vieren, geef je je eigen handelen positieve aandacht.',
            'Motivatie stijgt bij meer positieve ervaringen.'
          ]
        },
        {
          title: '4. Ping Ping beweging',
          icon: 'account-group-outline',
          image: 'routes',
          points: [
            'Jongvolwassenen de tools geven om zelf regie te nemen.',
            'Schulden voorkomen rondom life events.',
            'Gedeelde verantwoordelijkheid met bedrijven en organisaties.'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scope>
</style>
