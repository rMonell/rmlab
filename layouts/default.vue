<template>
  <Fragment>
    <main class="overflow-hidden w-100 h-100-vh index-0 position-relative" v-if="loading">
      <Header />
      <Menu />
      <ScrollView>
        <nuxt />
      </ScrollView>
    </main>
    <main class="overflow-hidden w-100 h-100-vh index-0 position-relative" v-else>
      <Splash :setLoading="setLoading" />
    </main>
  </Fragment>
</template>

<style>
  main {
    background-color: #000;
    color: #fff;
  }
  a {
    text-decoration: none;
    color: currentColor;
  }

  .mix-difference {
    mix-blend-mode: difference;
  }
</style>

<script>
import Header from '~/components/global/header/Header.vue'
import Menu from '~/components/global/menu/Menu.vue'
import Splash from '~/components/splash/Splash.vue'
import ScrollView from '~/components/global/scrollView/ScrollView.vue'
import { Fragment } from 'vue-fragment'

export default {
  components: {
    Header, Menu, ScrollView, Fragment, Splash
  },

  data() {
    return {
      loading: true
    }
  },

  mounted() {
    const index = this.$store.state.section.tree.indexOf($nuxt.$route.path)
    this.$store.commit('section/set', index)
  },

  methods: {
    setLoading(state) {
      this.loading = state
    }
  }
}
</script>
