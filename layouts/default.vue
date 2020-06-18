<template>
  <fragment>
    <main class="overflow-hidden w-full h-screen z-0 relative" v-if="loading">
      <app-header />
      <app-menu />
      <app-footer />
      <scroll-view>
        <nuxt />
      </scroll-view>
    </main>
    <main class="overflow-hidden w-full h-screen z-0 relative" v-else>
      <splash :setLoading="setLoading" />
    </main>
  </fragment>
</template>

<style>
main {
  background-color: #000;
  color: #fff;
}
.mix-difference {
  mix-blend-mode: difference;
}
</style>

<script>
import AppHeader from "~/components/global/header/AppHeader.vue";
import AppFooter from "~/components/global/footer/AppFooter.vue";
import AppMenu from "~/components/global/menu/AppMenu.vue";
import Splash from "~/components/splash/Splash.vue";
import ScrollView from "~/components/global/scrollView/ScrollView.vue";
import { Fragment } from "vue-fragment";

export default {
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter,
    'app-menu': AppMenu,
    'scroll-view': ScrollView,
    'fragment': Fragment,
    'splash': Splash
  },

  data() {
    return {
      loading: false
    };
  },

  mounted() {
    const index = this.$store.state.section.tree.indexOf($nuxt.$route.path)

    this.$store.commit(
      "locale/set",
      (window.navigator.userLanguage || window.navigator.language) === "fr-FR"
        ? "fr-FR"
        : "en-US"
    )

    this.$store.commit("section/set", index)
  },

  methods: {
    setLoading(state) {
      this.loading = state
    }
  }
};
</script>
