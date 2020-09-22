<template>
  <div>
    <TopBanner />
    <section class="section">
      <CoreSection
        class="mt-10 mb-10"
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
    <AccordionDisplay class="mt-10 mb-10" />
    <section class="container">
      <div class="row mt-10 mb-10">
        <div class="col-md-6 col-sm-12">
          <div class="h2">Bekijk de PING PING video</div>
          <p>
            Met PingPing bieden we je een persoonlijke routeplanner om op een leuke en makkelijke manier je (financiële) vaardigheden te verbeteren en je basis op orde te brengen. Zo weet je precies wanneer en wat je moet regelen bij verschillende life events, zoals 18 worden, werken, studeren en op jezelf gaan wonen.
          </p>
          <p>
            <CoreButton
              label="Ontdek de app"
              @click.native="$router.push('/ontdek-de-app')"
              class=""
            />
          </p>
        </div>
        <div class="col-6 embed-column">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG"
            frameborder="0"
            allow="autoplay; encrypted-media"
            class="video-embed"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
    <DownloadNow class="mt-10 mb-10" />
    <CoreSection
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

    </CoreSection>
  </div>
</template>

<script>
import TopBanner from '~/components/TopBanner'
import CoreSection from '~/components/CoreSection'
import AccordionDisplay from '~/components/AccordionDisplay'
import CoreButton from '~/components/CoreButton'
import CoreItemCard from '~/components/CoreItemCard'
import DownloadNow from '~/components/DownloadNow'

export default {
  name: 'HomePage',
  head: {
    title: ''
  },

  components: {
    TopBanner,
    CoreSection,
    AccordionDisplay,
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
