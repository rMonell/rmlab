<template>
    <nav class="w-100 h-100-vh position-absolute-tl index-0 flex-row justify-center items-center" ref="container">
        <ul>
            <li v-for="item in items" :key="item.path" ref="item">
                <nuxt-link
                    :to="item.path"
                    @click.native="handleClick"
                    class="font-xl-700"
                >
                    {{ item.value }}
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import { TimelineLite, Expo } from 'gsap'

export default {
    data () {
        return {
            items: [
                {
                    path: '/about',
                    value: 'À propos'
                },
                {
                    path: '/projects',
                    value: 'Mes projets'
                },
                {
                    path: '/contact',
                    value: 'Me contacter'
                }
            ],
            isAnimating: false,
        }
    },

    computed: {
        isOpen () {
            return this.$store.state.menu.isOpen
        }
    },

    methods: {
        toggleMenu (action) {
            const { container, item } = this.$refs
            const timeline = new TimelineLite() 
            const easing = Expo.easeInOut

            this.isAnimating = true

            timeline.fromTo(container, 1, { y: '-100%',  ease: easing }, { y: '0%',  ease: easing })

            timeline.staggerFromTo(
                item,
                .75,
                {y: -25, alpha: 0, ease: easing},
                {y: 0, alpha: 1, ease: easing, onComplete: () => this.isAnimating = false},
                .15,
                '-=.25'
            )
            
            action === 'open' ? timeline.play() : timeline.reverse(0)
        },

        handleClick() {
            this.toggleMenu('close')
            this.$store.commit('menu/toggle')
        }
    },

    watch: {
        isOpen: function(status) { status ? this.toggleMenu('open') : this.toggleMenu('close') }
    }
}
</script>

<style>
    nav {
        transform: translateY(-100%);
        background-color: currentColor;
        mix-blend-mode: difference;
    }

    a {
        text-decoration: none;
        color: initial;
    }
</style>