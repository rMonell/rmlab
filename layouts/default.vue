<template>
  <main class="overflow-hidden w-100 h-100-vh p-l">
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
import Header from '~/components/header/Header.vue'

export default {
  components: {
    Header
  },
}
</script>