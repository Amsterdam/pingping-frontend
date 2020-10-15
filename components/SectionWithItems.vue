<template>
  <section class="section mt-5">
      <CoreSection
        :title="title"
        :subtitle="subtitle"
      >
        <div>
          <div class="row">
            <CoreItemCard
              v-for="(item, i) in items"
              :key="'section-item--' + i"
              class="col-4"
              :image="item.image"
              :title="item.title"
              :subtitle="item.subtitle"
            />
          </div>
        </div>
      </CoreSection>
    </section>
</template>

<script>
import VueTypes from 'vue-types'
  export default {
    name: 'SectionWithItems',

    props: {
      title: VueTypes.string,
      subtitle: VueTypes.string,
      items: VueTypes.arrayOf(Object)
    }
  }
</script>

<style lang="scss" scoped>

</style>