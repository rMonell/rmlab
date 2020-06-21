<template>
  <div class="logo overflow-hidden flex flex-row justify-center items-center pointer-events-auto">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.68 43.72" class="w-full cursor-pointer text-white" @click="handleClick">
      <g>
          <g>
              <polygon points="0 23.5 7.09 30.59 7.09 43.72 0 36.63 0 23.5"/>
              <polygon points="39.68 0 39.68 36.63 32.59 43.72 32.59 17.11 24.85 24.85 19.83 29.86 14.84 24.85 14.82 24.85 7.09 17.11 7.09 27.27 0 20.18 0 0 19.84 19.84 39.68 0"/>
          </g>
      </g>
    </svg>
  </div>
</template>

<style scoped>
  svg {
    max-width: 26px;
  }

  svg g {
    fill: currentColor;
  }
</style>

<script>
import { gsap } from "gsap/dist/gsap";

export default {
    data() {
      return {
        navigator: new this.$Navigator(this.$store, this.$router)
      }
    },

     mounted() {
        const timeline = gsap.timeline() 
        const easing = 'Expo.easeInOut'

        timeline.fromTo(
            '.logo > svg',
            { y: '100%', ease: easing },
            { duration: 1.5, y: '0%', ease: easing },
        )
    },

    methods: {
      handleClick() {
        this.navigator.set('/', $nuxt.$route.path)
      }
    }
}
</script>