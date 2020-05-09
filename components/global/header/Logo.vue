<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 45" class="logo w-100 cursor-pointer" @click="handleClick">
    <g>
      <path d="M60,28.41l-1,1.7-1.85,3.21-1.86-3.21-1-1.7L43.58,9.81,32.84,28.41h0l-1,1.7L30,33.32l-1.85-3.21-1-1.7h0L16.42,9.81,5.67,28.41h0l-1,1.7L2.83,33.32,1,30.11l-1-1.7L16.42,0,30,23.51,43.58,0Z"/>
      <path d="M60,40.09l-1,1.7L57.17,45l-1.86-3.21-1-1.7L43.58,21.49,32.84,40.09h0l-1,1.7L30,45l-1.85-3.21-1-1.7h0L16.42,21.49,5.67,40.09h0l-1,1.7L2.83,45,1,41.79l-1-1.7L16.42,11.68,30,35.19,43.58,11.68Z"/>
    </g>
  </svg>
</template>

<style>
  .logo {
    max-width: 36px;
  }

  svg path {
    fill: currentColor;
  }
</style>

<script>
import MagicTitle from '~/components/global/super/MagicTitle.vue'
import { TimelineLite, Expo } from 'gsap'

export default {
    components: {
        MagicTitle
    },

    data() {
      return {
        navigator: new this.$Navigator(this.$store, this.$router)
      }
    },

     mounted() {
        const timeline = new TimelineLite() 
        const easing = Expo.easeInOut

        timeline.staggerFromTo(
            '.logo path',
            1.5,
            { y: 30, alpha: 0, ease: easing },
            { y: 0, alpha: 1, ease: easing },
            .15,
        )
    },

    methods: {
      handleClick() {
        this.navigator.set('/', $nuxt.$route.path)
      }
    }
}
</script>