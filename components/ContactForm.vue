<template>
  <div class="pb-5 contact-form">
    <div class="h2">{{ title }}</div>
    <div class="mb-3" v-if="type=='appointment'">Laat je contactgegevens achter en wij nemen contact met je op.</div>
    <b-form
      @submit="onSubmit"
      v-if="!done"
      ref="form"
    >
      <b-form-group
        id="input-group-name"
        label="Naam"
        label-for="input-name"
      >
        <b-form-input
          id="input-name"
          v-model="form.name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-org"
        label="Organisatie"
        label-for="input-org"
      >
        <b-form-input
          id="input-org"
          v-model="form.organization"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-email"
        label="E-mailadres"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"
          v-model="form.email"
          type="email"
          required
        ></b-form-input>
      </b-form-group>

       <b-form-group
        id="input-group-phone"
        label="Telefoonnummer"
        label-for="input-1"
      >
        <b-form-input
          id="input-phone"
          v-model="form.phoneNumber"
          type="phoneNumber"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-body"
        label="Jouw vraag"
        v-if="type === 'contact'"
        label-for="input-body"
      >
        <b-form-textarea
          id="input-body"
          rows="6"
          v-model="form.body"
          required
        ></b-form-textarea>
      </b-form-group>
      <div class="row btn-row">
        <CoreButton
          label="Annuleer"
          class="text-center alt"
          type="button"
          @click.native="$emit('close')"
        />
        <CoreButton
          :label="sendButtonLabel"
          class="text-center"
          type="submit"
          @click="$refs.form.submit()"
        />
      </div>
    </b-form>
    <div v-else>Bedankt. uw bericht wordt afgeleverd.</div>
  </div>
</template>

<script>
const CONTACT_API = 'https://api.pingping.amsterdam.nl/api'
// const CONTACT_API = 'http://localhost:4010/api'
import axios from 'axios'
import VueTypes from 'vue-types'

export default {
  name: 'ContactForm',

  props: {
    type: VueTypes.string.def('contact'),
    title: VueTypes.string.def('Stel hier jouw vraag')
  },

  computed: {
    sendButtonLabel () {
      return this.type === 'contact' ? 'Verstuur' : 'Maak een afspraak'
    }
  },

  methods: {
    onSubmit (e) {
      e.preventDefault()
      this.loading = true
      this.form.type = this.type
      const body = {
        query: `
          mutation ($input: ContactInput!) {
            contact (input: $input)
          }
          `,
        variables: {
          input: this.form
        }
      }
      axios.post(CONTACT_API, body)
        .catch(() => {
          this.loading = false
        })
        .then(() => {
          this.loading = false
          this.done = true
        })
    }
  },

  data () {
    return {
      done: false,
      loading: false,
      form: {
        name: '',
        organization: '',
        phoneNumber: '',
        type: 'Stel je vraag',
        email: '',
        body: ''
      }
    }
  }
}
</script>

<style lang="scss">
.contact-form {
  padding: 1rem;
  margin-top: 1rem;

  .h2 {
    margin-bottom: 1rem;
  }

  label {
    margin-bottom: 0.1rem;
  }

  .form-group {

  }
}
</style>
