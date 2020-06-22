<template>
  <component
    :is="tag"
    :type="type"
    :class="`overflow-hidden h-12 border-2 text-sm font-bold uppercase focus:outline-none transition-colors duration-300 ${themeClassName}`"
    ref="button"
    @click="onClick"
  >
    <span class="flex justify-center items-center w-full h-full pointer-events-none" ref="content">
      <slot v-if="!waiting" />
      <spinner v-else />
    </span>
  </component>
</template>

<script>
import { gsap } from "gsap/dist/gsap";
import Spinner from './Spinner'

export default {
  components: {
    'spinner': Spinner,
  },
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      required: false
    },
    waiting: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    themeClassName() {
      const fix = this.$store.state.theme.value === 'dark' ? 'border-white' : 'border-black'
      const hover = this.$store.state.theme.value === 'dark' ? 'hover:bg-white hover:color-dark hover:text-black' : 'hover:bg-black hover:color-white hover:text-white'
      
      return `${fix} ${hover} ${this.waiting ? 'pointer-events-none' : ''}`
    }
  },
  mounted() {
      const timeline = gsap.timeline() 
      const easing = 'Expo.easeInOut'

      timeline.fromTo(
          this.$refs['button'],
          { width: 0, padding: 0 },
          { duration: 1.5, width: '100%', padding: '0 20px', ease: easing }
      )

      timeline.from(
          this.$refs['button'],
          { duration: 1.5, height: 0, ease: easing },
          '-=.75'
      )
      timeline.from(
          this.$refs['content'],
          { duration: 1.5, y: '100%', ease: easing },
          '-=1.25'
      )
  }
};
</script>