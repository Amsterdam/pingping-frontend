<template>
  <div class="comp-icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 25 25"
      :aria-labelledby="name"
      role="presentation"
    >
      <path
        :d="iconPath"
        :fill="color"
      />
    </svg>
  </div>

</template>

<script>
import {
  mdiMapMarkerOutline,
  mdiCommentQuestionOutline,
  mdiAccountGroupOutline,
  mdiCloseCircleMultipleOutline,
  mdiFormatQuoteClose,
  mdiPhone
} from '@mdi/js'
import VueTypes from 'vue-types'

export default {
  name: 'Icon',

  props: {
    name: VueTypes.string.def(''),
    color: VueTypes.string.def('#0d2036'),
    size: VueTypes.string.def('md')
  },

  computed: {
    width () {
      switch (this.size) {
        case 'lg':
          return 30
        case 'md':
          return 25
        case 'sm':
        default:
          return 20
      }
    },
    height () {
      switch (this.size) {
        case 'lg':
          return 30
        case 'md':
          return 25
        case 'sm':
        default:
          return 20
      }
    },
    viewBox () {
      switch (this.size) {
        case 'md':
        case 'sm':
        default:
          return '0 0 1024 1024'
      }
    },

    iconPath () {
      switch (this.name) {
        case 'map-marker-outline':
          return mdiMapMarkerOutline
        case 'comment-question-outline':
          return mdiCommentQuestionOutline
        case 'account-group-outline':
          return mdiAccountGroupOutline
        case 'close-circle-multiple-outline':
          return mdiCloseCircleMultipleOutline
        case 'format-quote-close':
          return mdiFormatQuoteClose
        case 'phone':
          return mdiPhone
        default:
          return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.comp-icon {
  text-align: center;
  width: 100%;
  height: 100%;

  min-width: 2rem;
  min-height: 2rem;
}
</style>