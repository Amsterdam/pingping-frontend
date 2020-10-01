<template>
  <div>
    <CorePageHeader
      title="Wordt nu onze nieuwe partner"
      image-name="safe"
    />
    <section class="section mt-5">
      <CoreSection
        title="Hoe worden City Pings verdiend?"
        subtitle="Door de stappen in het persoonlijke routeplan te doorlopen en de acties uit te voeren, verdient de gebruiker punten die aan het eind van de route ingewisseld kunnen worden voor een beloning."
      >
        <div>
          <div class="row">
            <CoreItemCard
              v-for="(item, i) in items"
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
    <GameRules class="mt-10 mb-10" />
    <section class="container">
      <Partners class="row mt-10 mb-10" />
      <div class="row mt-10 mb-10">
        <div class="col-6 embed-column">
          <iframe
            src="https://player.vimeo.com/video/461740651"
            frameborder="0"
            width="550"
            height="315"
            class="video-embed"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="h2">Waarom bestaat PING PING</div>
          <p>
            Met PingPing bieden we je een persoonlijke routeplanner om op een leuke en makkelijke manier je (financiële) vaardigheden te verbeteren en je basis op orde te brengen. Zo weet je precies wanneer en wat je moet regelen bij verschillende life events, zoals 18 worden, werken, studeren en op jezelf gaan wonen.
          </p>
          <p>
            Wie heeft PING PING mogelijk gemaakt voor de jongeren:
          </p>
          <div class="parnter-logos">
            <img
              src="~assets/images/ilc.png"
              alt="fleks"
              class="mr-5"
            >
            <a href="https://www.fleks.works"><img
                src="~assets/images/fleks.png"
                alt="Innovatie LAB"
              ></a>
          </div>
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
import ContactForm from '~/components/ContactForm'

export default {
  name: 'VoorPartners',

  components: {
    CorePageHeader,
    CoreIconTopSection,
    GameRules,
    Partners,
    ContactForm
  },

  head: {
    title: '- Voor Partners'
  },

  data () {
    return {
      items: [
        {
          title: 'Volg jouw route.',
          subtitle: 'Kijk welke stappen je moet nemen om jouw doel te bereiken.',
          image: 'why-2.png'
        },
        {
          title: 'Verdien City Pings.',
          subtitle: 'Vier je successen.',
          image: 'why-4.png'
        },
        {
          title: 'Claim rewards.',
          subtitle: 'Beloon jezelf.',
          image: 'why-3.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
