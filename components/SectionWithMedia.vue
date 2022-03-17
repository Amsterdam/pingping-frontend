<template>
  <section :class="['container', 'section-with-media', 'mt-10', 'mb-10', reverse ? 'reverse': undefined]">
    <div class="row" v-if="subtitle">
      <div class="subtitle col-md-6">{{ subtitle }}</div>
      <div class="subtitle col-md-6"></div>
    </div>
    <div class="row">
      <div class="col-md-6 col-sm-12 cont">
        <div class="h2">{{ title }}</div>
        <p>
          <nuxt-content :document="content" />
        </p>
      </div>
      <div class="col-6 embed-column">
        <iframe
          :src="videoUrl"
          v-if="videoUrl"
          frameborder="0"
          width="550"
          height="315"
          class="video-embed"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
        <img class="img p-3" v-else-if="image" :src="imageSource" />
      </div>
    </div>
  </section>
</template>

<script>
import VueTypes from 'vue-types'
  export default {
    name: 'SectionWithMedia',

    props: {
      title: VueTypes.string,
      subtitle: VueTypes.string,
      videoUrl: VueTypes.string,
      image: VueTypes.string,
      content: VueTypes.object,
      reverse: VueTypes.bool.def(false)
    },

    computed: {
      imageSource () {
        return this.image
      }
    }
  }
</script>

<style lang="scss" scoped>
.section-with-media {
  &.reverse {
    .row {
      flex-direction: row-reverse;
    }

    img {
      margin-left: 0;
    }
  }

  .subtitle {
    color: #FB9F4B;
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 0.5rem;
  }

  img {
    border-radius: 30px;
    max-height: 400px;
    width: 100%;
    object-fit: cover;
    vertical-align: middle;
  }
}
</style>
