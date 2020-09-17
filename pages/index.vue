<template>
  <div>
    <section class="section">
      <!-- <div class="container">
        <div class="columns is-gapless is-desktop">
          <div class="column is-6">
            <p class="title">
              Een routeplanner die jongeren opweg gaat helpen!
            </p>
            <p>PINGPING helpt je om je financiële basis op orde te hebben. Zo weet je precies wanneer je wat moet regelen, wat je moet betalen en wat je kunt krijgen. </p>
          </div>
          <div class="column is-6">b</div>
        </div>
      </div> -->

      <CoreSection
        title="Waarom kies je voor Ping ping"
        subtitle="Met PingPing bieden we je een persoonlijke routeplanner om op een leuke en makkelijke manier je (financiële) vaardigheden te verbeteren en je basis op orde te brengen. Zo weet je precies wanneer en wat je moet regelen bij verschillende life events, zoals 18 worden, werken, studeren en op jezelf gaan wonen."
      >
        <div>
          <div class="row">
            <CoreItemCard
              v-for="(item, i) in whyItems"
              :key="'whyItem-' + i"
              class="col-4"
              :image="item.image"
              :title="item.title"
              :subtitle="item.subtitle"
            />
            <div class="col-12 text-center">
              <CoreButton
                label="Ontdek de app"
                @click.native="$router.push('/ontdek-de-app')"
                class=""
              />
            </div>
          </div>
        </div>
      </CoreSection>
    </section>
    <DownloadNow class="mt-5" />
    <DownloadNow class="mt-5" />
  </div>
</template>

<script>
import CoreSection from '~/components/CoreSection'
import CoreButton from '~/components/CoreButton'
import CoreItemCard from '~/components/CoreItemCard'
import DownloadNow from '~/components/DownloadNow'

export default {
  name: 'HomePage',

  components: {
    CoreSection,
    CoreButton,
    CoreItemCard,
    DownloadNow
  },

  data () {
    return {
      whyItems: [
        {
          title: 'Bepaal jouw goals',
          subtitle: 'Ping Ping helpt je om je financiële basis op orde te hebben.',
          image: 'why-1.png'
        },
        {
          title: 'Volg de stappen route',
          subtitle: 'Ping Ping helpt je om je financiële basis op orde te hebben.',
          image: 'why-2.png'
        },
        {
          title: 'Verdien citypings',
          subtitle: 'Ping Ping helpt je om je financiële basis op orde te hebben.',
          image: 'why-3.png'
        },
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

<style lang="scss">
</style>
