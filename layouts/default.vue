<template>
  <main class="overflow-hidden w-100 h-100-vh p-l">
    <Menu />
    <Header />
    <nuxt />
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

export default {
  components: {
    Header, Menu
  },
}
</script>