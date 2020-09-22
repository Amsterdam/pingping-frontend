<template>
  <div class="pb-5">
    <b-form
      @submit="onSubmit"
      ref="form"
    >
      <b-form-group
        id="input-group-2"
        label="Naam"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.naam"
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
          v-model="form.bericht"
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
  </div>
</template>

<script>
export default {
  name: 'ContactForm',

  methods: {
    onSubmit (e) {
      e.preventDefault()
      console.log('submit')
    }
  },

  data () {
    return {
      form: {
        naam: '',
        // achternaam: '',
        email: '',
        bericht: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
