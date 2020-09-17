<template>
  <div>
    <CorePageHeader
      title="Wordt nu onze nieuwe partner"
      imageName="safe"
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
  </div>
</template>

<script>
import CorePageHeader from '~/components/CorePageHeader'
export default {
  name: 'VoorPartners',

  components: {
    CorePageHeader
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
