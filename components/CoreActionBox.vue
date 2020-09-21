<template>
  <div class="container core-action-box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CoreActionBox'
}
</script>

<style lang="scss">
@import "bootstrap/scss/_functions.scss";
@import "bootstrap/scss/_variables.scss";
@import "bootstrap/scss/_mixins.scss";

.core-action-box {
  @include make-col-ready();
  border-radius: 30px;
  width: 100%;
  border-radius: 30px;
  background-color: rgba(192, 234, 239, 0.5);

  .figure-column {
    margin: 0;
    bottom: 0;

    .figure {
      margin-left: 1rem;
      max-width: 10rem;
      max-height: 11rem;
    }
  }

  .content-column {
    margin: auto;
  }

  .action-column {
    margin: auto;
  }
}

@include media-breakpoint-down(md) {
  .figure-column {
    @include make-col(3);
  }

  .content-column {
    @include make-col(6);
  }

  .action-column {
    @include make-col(3);
  }
}

@include media-breakpoint-down(sm) {
  .core-action-box {
    border-radius: 0;

    .content-column {
      @include make-col(12);
      background-color: #fff;
      order: 1;
      // padding: 1rem;
    }

    .figure-column {
      order: 2;
      @include make-col(5);

      .figure {
        margin-left: 1rem;
        max-width: 7.5rem;
        max-height: 9rem;
      }
    }

    .action-column {
      order: 3;
      @include make-col(7);
    }
  }
}
</style>
