<template>
  <div :class="['core-split-display', reverse && 'core-split-display--reverse']">
    <div class="core-split-display__bg-section bg-section contianer-fluid row">
      <div class="col-7"></div>
      <div class="col-5">
        <div class="box bg-section__box"></div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-7 content-column">
          <slot></slot>
        </div>
        <div class="col-5 frame-column text-center">
          <slot name="frame">
            <PhoneFrame image="route1" />
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import PhoneFrame from './PhoneFrame'

export default {
  name: 'CoreSplitDisplay',

  props: {
    reverse: VueTypes.bool.def(false)
  },

  components: {
    PhoneFrame
  }
}
</script>

<style lang="scss">
@import "bootstrap/scss/_functions.scss";
@import "bootstrap/scss/_variables.scss";
@import "bootstrap/scss/_mixins.scss";

.core-split-display {
  position: relative;

  &--reverse {
    .row {
      flex-direction: row-reverse;
    }
  }

  &__bg-section {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
  }

  .bg-section {
    &__box {
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      background-color: rgba(192, 234, 239, 0.5);
      width: 100%;
      height: 31rem;
    }

    @include media-breakpoint-down(sm) {
      display: none;
    }
  }

  &--reverse {
    .bg-section {
      &__box {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
      }
    }
  }

  .frame-column {
    display: flex;
    align-items: start;

    .phone-frame {
      margin: auto;
      margin-top: -3rem;
    }

    .frame {
      &__side-image {
        max-width: 8.75rem;
        margin-left: -3rem;
      }
    }

    @include media-breakpoint-down(md) {
      .phone-frame {
        margin: auto;
      }

      .frame {
        &__side-image {
          display: none;
        }
      }
    }
  }

  @include media-breakpoint-down(sm) {
    .col-7,
    .col-5 {
      @include make-col(12);
    }

    &__bg {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
}
</style>
