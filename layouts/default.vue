<template>
  <fragment>
    <main :class="`overflow-hidden w-full z-10 relative h-screen ${themeClassName}`" v-if="loading">
      <app-header />
      <app-menu />
      <app-footer />
      <div ref="overlay" id="app-overlay" class="overlay" />
      <scroll-view>
        <nuxt />
      </scroll-view>
    </main>
    <main :class="`overflow-hidden w-full h-screen z-10 relative ${themeClassName}`" v-else>
      <splash :setLoading="setLoading" />
    </main>
  </fragment>
</template>

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
      loading: false,
    };
  },

  computed: {
    themeClassName() {
      const bgClass = this.$store.state.theme.value === 'dark' ? 'bg-black' : 'bg-white'
      const colorClass = this.$store.state.theme.value === 'dark' ? 'text-white' : 'text-black'

      return `${bgClass} ${colorClass}`
    }
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

<style scoped>
.overlay {
  position: absolute;
  left: 0;
  width: 100%;
  height: 0%;
  background-color: currentColor;
  z-index: 500;
}
</style>

