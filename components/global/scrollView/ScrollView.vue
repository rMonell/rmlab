<template>
    <section
        class="w-100 h-100-vh flex-row justify-center items-center p-m m:p-l position-relative"
        @wheel="handleScroll"
        v-touch:swipe.top="() => navigator.prev(this.$store)"
        v-touch:swipe.bottom="() => navigator.next(this.$store)"
    >
        <slot />

        <div ref="overlay" id="app-overlay" class="overlay" />
    </section>
</template>

<script>
import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents)

export default {
    data () {
      return {
          navigator: new this.$Navigator(this.$store, this.$router)
      }
    },

    methods: {
        handleScroll (event) {
            event.deltaY > 0 ? this.navigator.next(this.$store) : this.navigator.prev(this.$store)
        }
    }
}
</script>

<style>
    .overlay {
        position: absolute;
        left: 0;
        width: 100%;
        height: 0%;
        background-color: currentColor;
        z-index: 500;
    }
</style>