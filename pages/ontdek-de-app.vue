<template>
  <div class="">
    <CorePageHeader
      title="Ontdek Ping Ping"
      subtitle="Voor jongvolwassenen die hun basis op orde willen hebben. "
      image-name="abacus"
    />
    <section class="container">
      <div class="row mt-10 mb-10">
        <div class="col-md-6 col-sm-12">
          <div class="h2">Bekijk de PING PING video</div>
          <p>
            Met PingPing bieden we je een persoonlijke routeplanner om op een leuke en makkelijke manier je (financiële) vaardigheden te verbeteren en je basis op orde te brengen. Zo weet je precies wanneer en wat je moet regelen bij verschillende life events, zoals 18 worden, werken, studeren en op jezelf gaan wonen.
          </p>
        </div>
        <div class="col-6 embed-column">
          <iframe
            width="550"
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
    <AccordionDisplay />
    <section class="container">
      <Partners class="row mt-10 mb-10" />
      <div class="row mt-10 mb-10">
        <div class="col-6 embed-column">
          <iframe
            width="550"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG"
            frameborder="0"
            allow="autoplay; encrypted-media"
            class="video-embed"
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
    <CoreIconTopSection icon="format-quote-close">
      <Quotes/>
    </CoreIconTopSection>
  </div>
</template>

<script>
import CorePageHeader from '~/components/CorePageHeader'
import AccordionDisplay from '~/components/AccordionDisplay'
import Partners from '~/components/Partners'
import CoreIconTopSection from '~/components/CoreIconTopSection'
import Quotes from '~/components/Quotes'

export default {
  name: 'OntdekDeApp',
  head: {
    title: '- Ontdek De App'
  },

  components: {
    CorePageHeader,
    AccordionDisplay,
    Partners,
    CoreIconTopSection,
    Quotes
  }
}
</script>

<style lang="scss" scoped>
</style>
