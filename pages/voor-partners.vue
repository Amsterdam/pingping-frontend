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
          <img src="~assets/images/img.jpg" />
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="h2">{{ aboutPingPing.title }}</div>
          <nuxt-content :document="aboutPingPing" />
        </div>
      </div>
    </section>
    <section class="section mt-5">
      <Partners class="mt-10 mb-10" :items="page.partners" />

      <CoreSection
        class="mt-10 mb-10"
        title="Wil jij onze nieuwe partner worden?"
        subtitle="Wij zijn op zoek naar bedrijven, organisaties en andere gemeenten die samen met ons Ping Ping verder willen brengen. Dit kan door mee te werken aan het loyaltyprogramma door het aanbieden van een beloning. Ook zoeken we nieuwe investeerder die mogelijk ook mede-eigenaar willen worden van de app of onderdeel willen vormen van de PingPing –Alliantie. Help mee in de strijd voor een schuldenvrije toekomst en neem contact op via het contactformulier."
      >
      </CoreSection>
    </section>

    <CoreIconTopSection icon="phone" class="mb-10">
      <ContactForm />
    </CoreIconTopSection>

    <CoreIconTopSection icon="format-quote-close" v-if="quotes">
      <Quotes :items="quotes" />
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
    const page = await $content('voor-partners/config').fetch()
    const itemsSection = await $content('voor-partners/items').fetch()
    const aboutPingPing = await $content('voor-partners/over-pingping').fetch()

    const sectionGameRules = await $content('voor-partners/spelregels').fetch()
    const quotes = await $content('quotes').where({ id: page.quote }).fetch()

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
    max-height: 400px;
    width: 100%;
    object-fit: cover;
  }
}
</style>
