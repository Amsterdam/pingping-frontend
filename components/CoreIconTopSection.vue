<template>
  <div class="core-icon-top-section">
    <div class="core-icon-top-section__top top justify-content-center">
      <div class="top__icon-wrapper icon-wrapper">
        <div class="icon-wrapper__icon">
          <Icon :name="icon" size="lg" />
        </div>
      </div>
    </div>
    <div class="core-icon-top-section__content">
      <div class="container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import Icon from './Icon'

export default {
  name: 'CoreIconTopSection',

  props: {
    icon: VueTypes.string.def('')
  },

  components: {
    Icon
  }
}
</script>

<style lang="scss">
.core-icon-top-section {
  &__content {
    background-color: #eef9fa;
    padding-top: 2.5rem
  }

  .top {
    position: relative;
    margin-bottom: -2.5rem;
    display: flex;

    &__icon-wrapper {
      background-color: #eef9fa;
      border-radius: 50%;
      height: 5rem;
      width: 5rem;
      text-align: center;
    }

    .icon-wrapper {
      &__icon {
        padding: 1rem;
        font-size: 0.9rem;
      }
    }
  }
}
</style>
