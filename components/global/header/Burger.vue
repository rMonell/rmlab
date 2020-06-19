<template>
    <button class="burger" @click="handleClick">
        <div class="slices">
            <span  v-for="i in 3" :key="i" ref="slice"></span>
        </div>
        <div class="closes">
            <span  v-for="i in 2" :key="i" ref="close"></span>
        </div>

        <svg ref="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect />
        </svg>
    </button>
</template>

<script>
import { TimelineLite, Expo } from 'gsap'

    export default {
        data() {
            return {
                timeline: new TimelineLite({ paused: true })
            }
        },
        
        computed: {
            isActive () {
                return this.$store.state.menu.isOpen
            }
        },

        mounted() {
            const { slice, close, svg } = this.$refs
            const easing = Expo.easeInOut

            this.timeline.staggerTo(slice, .4, {scaleX: 0, ease: easing}, .1)
            this.timeline.staggerTo(close, .5, {width: 16, ease: easing}, .1, '+=.25')

            const mountTimeline = new TimelineLite()

            mountTimeline.addLabel('start');

            mountTimeline.to(svg, 1.5, { strokeDashoffset: 0, ease: easing }, 'start')

            mountTimeline.fromTo(
                slice,
                .75,
                { x: '-50%', y: 0, ease: easing },
                { width: 16, ease: easing },
                'start+=.75'
            )

            mountTimeline.to(slice[0], 1, { y: -7, ease: easing }, 'start+=.5')
            mountTimeline.to(slice[2], 1, { y: 7, ease: easing }, 'start+=.5')
        },

        methods: {
            handleClick () {
                this.$store.commit('menu/toggle')
            }
        },

        watch: {
            isActive: function(status) { status ? this.timeline.play() : this.timeline.reverse() }
        }
    }
</script>

<style lang="scss">
    $burger-size: 50px;

    .burger, .burger rect {
        width: $burger-size;
        height: $burger-size;
    }

    .burger:after, .burger svg {
        position: absolute;
        top: 0;
        left: 0;
    }

    .burger {
        position: relative;
        cursor: pointer;
        border: none;
        background-color: transparent;
        color: #fff;

        &:hover:after {
            transform-origin: top;
            transform: scale(1, 1);
        }

        &:active {
            outline: none;
            .slices, .closes { transform: scale(.6) }
        }

        &:after {
            content: '';
            width: 100%;
            height: 100%;
            background-color: currentColor;
            transform-origin: bottom;
            transition: transform .3s ease;
            transform: scale(1, 0);
        }

        svg {
            z-index: -1;
            stroke-dashoffset: 200;

            rect {
                stroke: currentColor;
                stroke-width: 4px;
                stroke-dasharray: 200;
            }
        }

        .slices, .closes, .slices > span, .closes > span {
            position: absolute;
            top: 50%;
            left: 50%;
        }

        .slices, .closes {
            z-index: 200;
            mix-blend-mode: difference;
            transform: translate(-50%, -50%);
            transition: transform .125s ease;
        }

        .slices > span { transform-origin: left }

        span {
            display: block;
            background-color: currentColor;
            transition: all .3s ease;
        }

        span, .closes {
            width: 0;
            height: 2px;
        }

        .closes > span {
            width: 0;

            &:first-child { transform: translate(-50%, -50%) rotate(45deg) }
            &:last-child { transform: translate(-50%, -50%) rotate(-45deg) }
        }
    }
</style>