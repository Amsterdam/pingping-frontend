<template>
  <div>
    <TopBanner
      :title="page.title"
      :subtitle="page.subtitle"
    />
    <SectionWithItems v-bind="itemsSection" />
    <AccordionDisplay
      v-if="principles"
      :items="principles"
      class="mt-10 mb-10"
    />
    <SectionWithMedia v-bind="video" :content="video" />
    <DownloadNow class="mt-10 mb-10" :label="page.downloadNowLabel" />
    <!-- <CoreSection
      class="mt-10 mb-10"
      title="PING PING als onderdeel van de financiele educatie"
      subtitle="We zetten PING PING als onderdeel van de financiele educatie nog voordat er betalingsachterstanden ontstaan"
    >
      <div class="row justify-content-center">
        <img
          class="text-center"
          src="~assets/images/graph.png"
          srcset="~assets/images/graph@2x.png 2x,
             ~assets/images/graph@3x.png 3x"
        />
      </div>

    </CoreSection> -->
    <CoreIconTopSection
      icon="format-quote-close"
      v-if="quotes"
    >
      <Quotes :items="quotes" />
    </CoreIconTopSection>
  </div>
</template>

<script>
import TopBanner from '~/components/TopBanner'
import CoreSection from '~/components/CoreSection'
import AccordionDisplay from '~/components/AccordionDisplay'
import CoreButton from '~/components/CoreButton'
import CoreItemCard from '~/components/CoreItemCard'
import DownloadNow from '~/components/DownloadNow'
import CoreIconTopSection from '~/components/CoreIconTopSection'
import SectionWithMedia from '~/components/SectionWithMedia'
import Quotes from '~/components/Quotes'

export default {
  name: 'HomePage',

  components: {
    TopBanner,
    CoreSection,
    AccordionDisplay,
    CoreButton,
    CoreItemCard,
    DownloadNow,
    CoreIconTopSection,
    SectionWithMedia,
    Quotes
  },

  head () {
    return {
      title: '',
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }
  },

  async asyncData ({ $content, params }) {
    const page = await $content('home/config').fetch()
    const principles = await $content('principes').sortBy('title', 'asc').fetch()
    const itemsSection = await $content('home/waarom').fetch()
    const quotes = await $content('quotes').where({ id: page.quote }).fetch()
    const video = await $content('common/video').fetch()


    return {
      page,
      principles,
      itemsSection,
      quotes,
      video
    }
  }
}
</script>

<style lang="scss">
</style>
