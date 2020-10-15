<template>
  <div :class="['accordion-item', active && 'accordion-item--active']">
    <div :class="['bar', active ? 'bar--active' : '']"></div>
    <div :class="['ball', active ? 'ball--active' : '']"></div>
    <div class="title row">
      <div class="col-10 h3">{{ title }}</div>
      <div class="col-2 icon-column">
        <Icon
          :name="icon"
          :color="active ? '#0d2036' : '#2dbcca'"
        />
      </div>
    </div>
    <div
      v-if="active"
      class="content"
    >
      <nuxt-content :document="$props" />
      <ul>
        <li
          v-for="(item, i) in points"
          :key="'point-' + i"
        >{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import Icon from './Icon'

export default {
  name: 'AccordionItem',

  components: {
    Icon
  },

  props: {
    title: VueTypes.string.def(''),
    icon: VueTypes.string.def('map-marker-outline'),
    points: VueTypes.arrayOf(String).def([]),
    active: VueTypes.bool.def(false),
    body: VueTypes.any
  }
}
</script>

<style lang="scss">
@import "bootstrap/scss/_functions.scss";
@import "bootstrap/scss/_variables.scss";
@import "bootstrap/scss/_mixins.scss";

.accordion-item {
  position: relative;
  border-radius: 10px;
  background-color: rgba(45, 188, 202, 0.1);
  color: #2dbcca;
  margin-left: 3rem;
  margin-bottom: 1rem;

  &--active {
    background-color: rgba(45, 188, 202, 0.3);
    color: #0d2036;
  }

  .title {
    padding: 0.8rem 1.25rem;
    cursor: pointer;
    flex-direction: reverse;
  }

  ul {
    padding-inline-start: 0;
  }

  .icon-column {
    // padding: 0;
    text-align: right;
    // margin-bottom: 0.2rem;
  }

  .content {
    padding: 1rem;
    background-color: #f7fbff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .ball {
    content: "";
    height: 16px;
    width: 16px;
    position: absolute;
    border: solid 1px #2dbcca;
    background-color: #ffffff;
    margin: auto 0;
    margin-left: -3rem;
    margin-top: 1rem;
    border-radius: 50%;

    &--active {
      background-color: #2dbcca;
      border: 0;
    }
  }

  &:last-child {
    .bar {
      display: none;
    }
  }

  .bar {
    position: absolute;
    height: 100%;
    width: 5px;
    margin-left: -42px;
    background-color: rgba(45, 188, 202, 0.2);
    top: 2rem;

    &:last-child {
      display: none;
    }
  }
}

@include media-breakpoint-down(sm) {
  ul {
    padding-left: 1rem;
  }
}

@include media-breakpoint-down(md) {
  .accordion-item {
    margin-left: 0;

    .bar,
    .ball {
      display: none;
    }
  }
}
</style>
