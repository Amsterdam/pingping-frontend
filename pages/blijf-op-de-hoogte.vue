<template>
  <div>
    <CorePageHeader
      image-name="support"
      title="Wordt nu onze nieuwe partner"
    />
    <section class="container pt-5">
      <ContactForm />
    </section>
  </div>
</template>

<script>
import CorePageHeader from '~/components/CorePageHeader'
import ContactForm from '~/components/ContactForm'

export default {
  name: 'BlijfOpDeHoogte',

  components: {
    CorePageHeader,
    ContactForm
  }
}
</script>

<style lang="scss" scoped>
</style>
