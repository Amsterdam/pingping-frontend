<template>
  <div>
    <CorePageHeader
      :title="page.title"
      image-name="safe"
    />
    <SectionWithItems v-bind="itemsSection" />
    <GameRules class="mt-10 mb-10" v-bind="sectionGameRules" />
    <section class="container" v-if="aboutPingPing">
      <div class="row mt-10 mb-10">
        <div class="col-6 rounded-image">
          <img src="~assets/images/img.png" />
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="h2">{{ aboutPingPing.title }}</div>
          <nuxt-content :document="aboutPingPing" />
        </div>
      </div>
    </section>
    <section class="section mt-5" v-if="false ">
      <Partners class="mt-10 mb-10" />

      <CoreSection
        class="mt-10 mb-10"
        title="Wil jij onze nieuwe partner worden?"
        subtitle="Help je ons mee? Wij zijn opzoek naar bedrijven, organisaties en andere gemeenten die met ons PingPing wil samenwerken. Je wil graag meewerken aan het loyalty programma (beloningen) en daar ook zelf een aanbod voor hebben. Ook zoeken we nieuwe investeerders voor de app en die mogelijk interesse hebben om (mede) eigenaar te worden of onderdeel te zijn van een alliantie rondom de app. Help jij ons om voor een schuldvrije toekomst voor jongeren te strijden?"
      >
      </CoreSection>
    </section>

    <CoreIconTopSection icon="format-quote-close" class="mb-10" v-if="quotes">
      <Quotes :items="quotes" />
    </CoreIconTopSection>

    <CoreIconTopSection icon="phone">
      <ContactForm />
    </CoreIconTopSection>
  </div>
</template>

<script>
import CorePageHeader from '~/components/CorePageHeader'
import CoreIconTopSection from '~/components/CoreIconTopSection'
import SectionWithItems from '~/components/SectionWithItems'
import GameRules from '~/components/GameRules'
import Partners from '~/components/Partners'
import Quotes from '~/components/Quotes'
import ContactForm from '~/components/ContactForm'

export default {
  name: 'VoorPartners',

  components: {
    CorePageHeader,
    SectionWithItems,
    CoreIconTopSection,
    GameRules,
    Partners,
    Quotes,
    ContactForm
  },

  async asyncData ({ $content, head }) {
    const page = await $content('voor-partners').fetch()
    const itemsSection = await $content('blocks/voor-partners-items').fetch()
    const aboutPingPing = await $content('blocks/over-pingping').fetch()

    const sectionGameRules = await $content('blocks/voor-partners-spelregels').fetch()
    const quotes = await $content('quotes').where({ id: 2 }).fetch()

    return {
      page,
      itemsSection,
      sectionGameRules,
      aboutPingPing,
      quotes
    }
  },

  head: {
    title: '- Voor Partners'
  },
}
</script>

<style lang="scss" scoped>
.rounded-image {
  img {
    border-radius: 30px;
  }
}
</style>
