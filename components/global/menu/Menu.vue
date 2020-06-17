<template>
    <nav class="w-full flex flex-row justify-center items-center overflow-hidden" ref="container">
        <ul class="mix-difference">
            <li v-for="item in items" :key="item.path" ref="item">
                <nuxt-link
                    :to="item.path"
                    @click.native="handleClick"
                    class="text-5xl font-bold block w-full relative px-lg"
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
                    path: '/',
                    value: 'Accueil'
                },
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

            timeline: new TimelineLite({ paused: true }) 
        }
    },

    computed: {
        isOpen () {
            return this.$store.state.menu.isOpen
        }
    },

    mounted() {
        const { container, item } = this.$refs
        const easing = Expo.easeInOut

        this.timeline.fromTo(container, 1, { height: '0vh',  ease: easing }, { height: '100vh',  ease: easing })

        this.timeline.staggerFromTo(
            item,
            .75,
            {y: -25, alpha: 0, ease: easing},
            {y: 0, alpha: 1, ease: easing, onComplete: () => this.isAnimating = false},
            .15,
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
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                background-color: currentColor;
                mix-blend-mode: difference;
                transform-origin: right;
                transform: scale3d(0, 1, 1);
                transition: transform .6s cubic-bezier(0.5, 0.1, 0, 1);
            }
        }
    }
</style>