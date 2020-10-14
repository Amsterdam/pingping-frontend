<template>
  <div class="pb-5">
    <b-form
      @submit="onSubmit"
      v-if="!done"
      ref="form"
    >
      <b-form-group
        id="input-group-2"
        label="Naam"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="E-Mail"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Bericht"
        label-for="input-3"
      >
        <b-form-textarea
          id="input-3"
          v-model="form.body"
          required
        ></b-form-textarea>
      </b-form-group>

      <CoreButton
        label="Verstuur"
        class="text-center"
        type="submit"
        @click="$refs.form.submit()"
      />
    </b-form>
    <div v-else>Bedankt. uw bericht wordt afgeleverd.</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ContactForm',

  methods: {
    onSubmit (e) {
      e.preventDefault()
      this.loading = true
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
      axios.post(`https://acc.api.pingping.amsterdam.nl/api`, body)
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
        // achternaam: '',
        email: '',
        body: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
