<template>
  <div>
    <CorePageHeader
      title="Wordt nu onze nieuwe partner"
      image-name="safe"
    />
    <section class="section mt-5">
      <CoreSection
        title="Hoe kom je aan City pings"
        subtitle="Als je de appvragen hebt beantwoordt en je route hebt aangemaakt, maar voordat je verder aan je route begint, kies je een beloning als 'spaardoel'. Dan ga je aan de slag met de route en wanneer je de route hebt 'uitgespeeld' kun je de beloning claimen. "
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

  data () {
    return {
      items: [
        {
          title: 'Voltooi prestaties',
          subtitle: 'Ping Ping helpt je om je financiële basis op orde te hebben.',
          image: 'why-4.png'
        },
        {
          title: 'Claim Rewards',
          subtitle: 'Ping Ping helpt je om je financiële basis op orde te hebben.',
          image: 'why-5.png'
        },
        {
          title: 'Bepaal jouw goals',
          subtitle: 'Ping Ping helpt je om je financiële basis op orde te hebben.',
          image: 'why-6.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
