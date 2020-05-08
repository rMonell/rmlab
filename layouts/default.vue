<template>
  <main class="overflow-hidden w-100 h-100-vh index-0 position-relative">
    <Header />
    <Menu />
    <ScrollView>
      <nuxt />
    </ScrollView>
  </main>
</template>

<style>
  main {
    background-color: #000;
    color: #fff;
  }
</style>

<script>
import Header from '~/components/global/header/Header.vue'
import Menu from '~/components/global/menu/Menu.vue'
import ScrollView from '~/components/global/scrollView/ScrollView.vue'

export default {
  components: {
    Header, Menu, ScrollView
  },

  mounted() {
    const index = this.$store.state.section.tree.indexOf($nuxt.$route.path)
    this.$store.commit('section/set', index)
  }
}
</script>