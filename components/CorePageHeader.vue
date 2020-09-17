<template>
  <div class="core-page-header">
    <div class="row">
      <div
        class="col-4 col-sm-2 offset-md-1 image-column"
        v-if="imageName"
      >
        <img
          :src="imageSource"
          :srcset="imageSourceSet"
        />
      </div>
      <div class="col-7 text-column">
        <div class="h1">{{ title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'

export default {
  name: 'CorePageHeader',

  props: {
    title: VueTypes.string.def(''),
    imageName: VueTypes.string.def('')
  },

  computed: {
    imageSourceSet () {
      return require('~/assets/images/' + this.imageName + '@2x.png') + ' 2x, ' + require('~/assets/images/' + this.imageName + '@3x.png') + ' 3x'
    },

    imageSource () {
      return require('~/assets/images/' + this.imageName + '.png')
    }
  }
}
</script>

<style lang="scss">
@import 'bootstrap/scss/_functions.scss';
@import 'bootstrap/scss/_variables.scss';
@import 'bootstrap/scss/_mixins.scss';

.core-page-header {
  @include make-col-ready();

  background-color: rgba(192, 234, 239, 0.5);

  img {
    padding: 3rem 0;
    max-width: 100%;
  }

  .image-column {
    @include make-col(4);
    @include make-col-offset(1)
  }

  .text-column {
    @include make-col(7);
    margin: auto 0;
  }
}

@include media-breakpoint-down(sm) {
  .core-page-header {
    .image-column {
      order: 2;
      @include make-col(3);
      @include make-col-offset(0);
      margin: auto 0;

      img {
        padding: 0.2rem;
      }
    }

    .text-column {
      order: 1;
      @include make-col(8);

      .h1 {
        padding: 1rem 0;
        margin-bottom: 0;
      }
    }
  }
}
</style>
