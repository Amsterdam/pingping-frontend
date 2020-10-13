<template>
  <div>
    <CorePageHeader
      :title="page.title"
      image-name="safe"
    />
    <section class="section mt-5">
      <CoreSection
        :title="sectionOne.title"
        :subtitle="sectionOne.subtitle"
      >
        <div>
          <div class="row">
            <CoreItemCard
              v-for="(item, i) in sectionOne.items"
              :key="'whyItem-' + i"
              class="col-4"
              :image="item.image"
              :title="item.title"
              :subtitle="item.subtitle"
            />
          </div>
        </div>
      </CoreSection>
    </section>
    <GameRules class="mt-10 mb-10" :items="sectionGameRules" />
    <section class="container">
      <div class="row mt-10 mb-10">
        <div class="col-6 rounded-image">
          <img src="~assets/images/img.png" />
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="h2">Over Ping Ping</div>
          <p>
            Ping Ping is een initiatief van de Gemeente Amsterdam en tot stand gekomen in samenwerking met het jongeren, professionals, IV Lab Sociaal en Fleks en een groot aantal andere partijen.
          </p>
          <p>
            Het doel is om jongvolwassenen een tool in handen te geven die hun in staat stelt zelf de regie te nemen over de regelzaken die komen kijken bij life events, zoals 18 worden, studeren, werken en op jezelf gaan wonen. Samen werken we aan een schuldenvrije toekomst voor jongvolwassenen. 
          </p>
          <!-- <div class="parnter-logos">
            <img
              src="~assets/images/ilc.png"
              alt="fleks"
              class="mr-5"
            >
            <a href="https://www.fleks.works"><img
                src="~assets/images/fleks.png"
                alt="Innovatie LAB"
              ></a>
          </div> -->
        </div>
      </div>
    </section>
    <section class="section mt-5">
      <Partners class="mt-10 mb-10" />

      <CoreSection
        class="mt-10 mb-10"
        title="Wil jij onze nieuwe partner worden?"
        subtitle="Help je ons mee? Wij zijn opzoek naar bedrijven, organisaties en andere gemeenten die met ons PingPing wil samenwerken. Je wil graag meewerken aan het loyalty programma (beloningen) en daar ook zelf een aanbod voor hebben. Ook zoeken we nieuwe investeerders voor de app en die mogelijk interesse hebben om (mede) eigenaar te worden of onderdeel te zijn van een alliantie rondom de app. Help jij ons om voor een schuldvrije toekomst voor jongeren te strijden?"
      >
      </CoreSection>
    </section>

    <CoreIconTopSection icon="format-quote-close" class="mb-10">
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
import GameRules from '~/components/GameRules'
import Partners from '~/components/Partners'
import Quotes from '~/components/Quotes'
import ContactForm from '~/components/ContactForm'

export default {
  name: 'VoorPartners',

  components: {
    CorePageHeader,
    CoreIconTopSection,
    GameRules,
    Partners,
    Quotes,
    ContactForm
  },

  async asyncData ({ $content, head }) {
    const page = await $content('voor-partners').fetch()
    const sectionOne = await $content('blocks/voor-partners-one').fetch()
    const sectionGameRules = await $content('blocks/voor-partners-spelregels').fetch()

    return {
      page,
      sectionOne,
      sectionGameRules
    }
  },

  head: {
    title: '- Voor Partners'
  },

  data () {
    return {
       quotes: [
        {
          image: 'avatar.jpg',
          quote: 'Je stapt in een andere wereld als je 18 wordt, daar mag je best een beetje hulp bij krijgen',
          title: 'Aicha, mbo studente'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.rounded-image {
  img {
    border-radius: 30px;
  }
}
</style>
