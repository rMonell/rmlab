<template>
    <section
        class="w-100 h-100-vh flex-row justify-center items-center p-l position-relative"
        @wheel="handleScroll"
    >
        <slot />

        <div ref="overlay" id="app-overlay" class="overlay" />
    </section>
</template>

<script>

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