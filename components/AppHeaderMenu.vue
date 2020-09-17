<template>
  <div class="app-header-menu container-md layout-header">
    <b-navbar toggleable="sm">
      <b-navbar-brand href="/">
        <span class="is-secondary-font brand-title">Ping Ping</span>
      </b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
      </b-navbar-toggle>

      <b-collapse
        id="navbar-toggle-collapse"
        is-nav
      >
        <b-navbar-nav class="ml-auto is-secondary-font">
          <b-nav-item to="/ontdek-de-app">Ontdek de app</b-nav-item>
          <b-nav-item to="/voor-partners">Voor Partners</b-nav-item>
          <b-nav-item to="/blijf-op-de-hoogte">Blijf Op De Hoogte</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'AppHeaderMenu'
}
</script>

<style lang="scss">
@import "~assets/scss/variables";
@import "bootstrap/scss/_functions.scss";
@import "bootstrap/scss/_variables.scss";
@import "bootstrap/scss/_mixins.scss";

.brand-title {
  letter-spacing: 15.05px;
}

.app-header-menu {
  &.page-ontdek-de-app {
    background-color: rgba(192, 234, 239, 0.5);
  }

  .navbar-light {
    a.nav-link {
      color: $dark;
      &:hover {
        color: $primary;
      }
    }
  }

  .nav-link {
    font-size: $font-size-title-small;
  }
}

@include media-breakpoint-down(sm) {
  .navbar {
    padding-left: 0;
    padding-right: 0;

    .brand-title {
      font-size: $font-size-title-small;
      letter-spacing: 8.43px;
    }
  }

  .app-header-menu {
    .navbar-barand {
      padding: 0;
      font-size: $font-size-title-small;
    }

    .navbar-toggler {
      border: 0;
    }
  }
}
</style>
