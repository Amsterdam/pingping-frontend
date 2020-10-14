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
            src="https://vimeo.com/464902314"
            frameborder="0"
            width="550"
            height="315"
            class="video-embed"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
    <AccordionDisplay />
    <CoreIconTopSection icon="format-quote-close">
      <Quotes />
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
