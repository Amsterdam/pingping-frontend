<template>
  <div>
    <TopBanner
      :title="page.title"
      :subtitle="page.subtitle"
    />
    <section-with-media v-bind="blockOne" :reverse="true" :content="blockOne" />
    <section-with-media v-bind="blockTwo" :content="blockTwo" />
    <section class="section mt-5">
      <CoreSection
        class="mt-10 mb-10"
        overtitle="Wat werkt voor jongeren?"
        title="Design thinking voor oplossing"
        subtitle="Net zoals andere gemeenten wil Amsterdam jongeren hierbij helpen. En ging met design thinking aan de slag: alle betrokkenen – beleidsmedewerkers, jeugdprofessionals, de Belastingdienst, zorgverzekeraars en natuurlijk ook jongeren zelf - werkten samen aan een aanpak. Samen ontdekten zij wat voor jongeren werkt:"
      >
      </CoreSection>
    </section>
    <SectionWithItems v-bind="itemsSection" />
    <section-with-media v-bind="blockThree" :reverse="true" :content="blockThree" />
    <section-with-media v-bind="blockFour" :content="blockFour" />
    <section class="section mt-5">
      <CoreSection
        class="mt-10 mb-10 call-to-action"
        overtitle="Wil je meer weten?"
        title="stel je vraag of maak een afspraak "
      >
        <div class="row btn-row">
          <CoreButton
            label="Stel je vraag"
            class="text-center"
            type="button"
            @click.native="openContact"
          />
          <CoreButton
            label="Maak een afspraak"
            class="text-center alt"
            type="button"
            @click.native="openAppointment"
          />
        </div>
      </CoreSection>
    </section>

    <b-modal ref="modal-contact" hide-header hide-footer>
      <ContactForm @close="closeContact" />
    </b-modal>

    <b-modal ref="modal-appointment" hide-header hide-footer>
      <ContactForm @close="closeAppointment" type="appointment" title="Maak een afspraak" />
    </b-modal>
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
import SectionWithMedia from '~/components/SectionWithMedia'

export default {
  name: 'VoorPartners',

  components: {
    CorePageHeader,
    SectionWithItems,
    CoreIconTopSection,
    GameRules,
    Partners,
    Quotes,
    ContactForm,
    SectionWithMedia
  },

  methods: {
    openContact () {
      this.$refs['modal-contact'].show()
    },

    closeContact () {
      this.$refs['modal-contact'].hide()
    },

    openAppointment () {
      this.$refs['modal-appointment'].show()
    },

    closeAppointment () {
      this.$refs['modal-appointment'].hide()
    },
  },

  async asyncData ({ $content, head }) {
    const page = await $content('voor-partners/config').fetch()
    const itemsSection = await $content('voor-partners/items').fetch()
    const aboutPingPing = await $content('voor-partners/over-pingping').fetch()

    const sectionGameRules = await $content('voor-partners/spelregels').fetch()
    const quotes = await $content('quotes').where({ id: page.quote }).fetch()

    const blockOne = await $content('voor-partners/block-1').fetch()
    const blockTwo = await $content('voor-partners/block-2').fetch()
    const blockThree = await $content('voor-partners/block-3').fetch()
    const blockFour = await $content('voor-partners/block-4').fetch()

    return {
      page,
      itemsSection,
      sectionGameRules,
      aboutPingPing,
      quotes,
      blockOne,
      blockTwo,
      blockThree,
      blockFour
    }
  },

  head: {
    title: '- Voor Partners'
  },
}
</script>

<style lang="scss">
.rounded-image {
  img {
    border-radius: 30px;
    max-height: 400px;
    width: 100%;
    object-fit: cover;
  }
}

.btn-row {
  justify-content: center;

  button {
    margin-bottom: 0.5rem;
  }

  button:first-child {
    margin-right: 0.5rem;
  }
}

.modal-content {
  border: 0px solid white;
  border-radius: 15px;
}
</style>
