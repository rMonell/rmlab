<template>
  <nav class="w-full flex flex-row justify-center items-center overflow-hidden" ref="container">
    <ul class="mix-difference">
      <li v-for="item in items" :key="item.path" class="text-white" ref="item">
        <nuxt-link
          :to="item.path"
          @click.native="handleClick"
          class="text-5xl font-bold block w-full relative px-lg"
        >{{ item.value }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { gsap } from "gsap/dist/gsap";

export default {
    data () {
        return {
            timeline: gsap.timeline({ paused: true }) 
        }
    },

    computed: {
        isOpen () {
            return this.$store.state.menu.isOpen
        },
        items() {
            const locale = this.$store.state.locale.value

            return [
                {
                    path: '/',
                    value: this.$store.state.locale.staticTrans.index[locale].custom_title
                },
                {
                    path: '/about',
                    value: this.$store.state.locale.staticTrans.about[locale].head.title
                },
                {
                    path: '/projects',
                    value: this.$store.state.locale.staticTrans.projects[locale].head.title
                },
                {
                    path: '/contact',
                    value: this.$store.state.locale.staticTrans.contact[locale].head.title
                }
            ]
        }
    },

    mounted() {
        const { container, item } = this.$refs
        const easing = 'Expo.easeInOut'

        this.timeline.fromTo(container, { height: '0vh',  ease: easing }, { duration: 1, height: '100vh',  ease: easing })

        this.timeline.fromTo(
            item,
            { y: -25, alpha: 0, ease: easing },
            { duration: .75, y: 0, alpha: 1, ease: easing, stagger: .15, onComplete: () => this.isAnimating = false },
            '-=.25'
        )
    },

    methods: {
        handleClick() {
            this.timeline.reverse()
            this.$store.commit('menu/toggle')
        }
    },

    watch: {
        isOpen: function(status) { status ? this.timeline.play() : this.timeline.reverse() }
    }
}
</script>

<style lang="scss">
nav {
  height: 0vh;
  background-color: currentColor;

  a {
    &:hover:after {
      transform: scale3d(1, 1, 1);
      transform-origin: left;
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: currentColor;
      mix-blend-mode: difference;
      transform-origin: right;
      transform: scale3d(0, 1, 1);
      transition: transform 0.6s cubic-bezier(0.5, 0.1, 0, 1);
    }
  }
}
</style>