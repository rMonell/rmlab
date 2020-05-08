<template>
    <section
        class="w-100 h-100-vh flex-row justify-center items-center p-l position-relative"
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
      }
    },

    methods: {
        navigateToIndex(index) {
            const nextRoute = this.$store.state.section.tree[index]
            this.$router.push(nextRoute)
        },

        playTimeline(direction, index) {
            const { overlay } = this.$refs
            const timeline = new TimelineLite() 
            const easing = Expo.easeInOut

            const oppositeDirection = direction === 'bottom' ? 'top' : 'bottom'

            overlay.style[oppositeDirection] = 0
            overlay.style[direction] = 'initial'
            
            timeline.to(overlay, .75, { height: '100%',  ease: easing, onComplete: () => this.navigateToIndex(index) })
            timeline.to(overlay, .75, { height: '0', [direction]: 0, [oppositeDirection]: 'initial', ease: easing, onComplete: () => this.isScrolling = false })
        },

        next(index, tree) {
            index >= tree.length - 1 ? this.$store.commit('section/set', 0) : this.$store.commit('section/increment')
            this.playTimeline('bottom', this.$store.state.section.index)
        },

        prev(index, tree) {
            index <= 0 ? this.$store.commit('section/set', tree.length - 1) : this.$store.commit('section/decrement')
            this.playTimeline('top', this.$store.state.section.index)
        },
        
        handleScroll (event) {
            const index = this.$store.state.section.index
            const tree = this.$store.state.section.tree

            if (!this.isScrolling) event.deltaY > 0 ? this.next(index, tree) : this.prev(index, tree)

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
        z-index: 500;
    }
</style>