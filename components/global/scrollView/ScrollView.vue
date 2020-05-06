<template>
    <section
        class="w-100 h-100-vh flex-row justify-center items-center p-l"
        @wheel="handleScroll"
    >
        <slot />

        <div ref="overlay" class="overlay" />
    </section>
</template>

<script>
import { TimelineLite, Expo } from 'gsap'

export default {
    data () {
      return {
          isScrolling: false,
          routeTree: ['/', '/about']
      }
    },

    methods: {
        navigateToIndex(index) {
            const nextRoute = this.routeTree[index]
            this.$router.push(nextRoute)
        },

        playTimeline(direction, index) {
            const { overlay } = this.$refs
            const timeline = new TimelineLite() 
            const easing = Expo.easeInOut

            const oppositeDirection = direction === 'bottom' ? 'top' : 'bottom'

            overlay.style[oppositeDirection] = 0
            
            timeline.to(overlay, .75, { height: '100%',  ease: easing, onComplete: () => this.navigateToIndex(index) })
            timeline.to(overlay, .75, { height: '0', [direction]: 0, [oppositeDirection]: 'initial', ease: easing })
        },

        next() {
            this.$store.commit('section/increment')
            this.playTimeline('bottom', this.$store.state.section.index)
        },

        prev() {
            this.$store.commit('section/decrement')
            this.playTimeline('top', this.$store.state.section.index)
        },
        
        handleScroll (event) {
            if(!this.isScrolling) {
                event.deltaY > 0 ? this.next() : this.prev()
            }

            this.isScrolling = true
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
        mix-blend-mode: difference;
    }
</style>