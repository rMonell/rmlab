<template>
    <div class="burger" @click="handleClick">
        <div class="slices">
            <span  v-for="i in 3" :key="i" ref="slice"></span>
        </div>
        <div class="closes">
            <span  v-for="i in 2" :key="i" ref="close"></span>
        </div>

        <svg ref="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect />
        </svg>
    </div>
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
                { y: 0, width: 0, ease: easing },
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

<style>
    .burger {
        position: relative;
        width: 50px;
        height: 50px;
        cursor: pointer;
    }

    .burger svg {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        stroke-dashoffset: 200;
    }

    rect {
        width: 50px;
        height: 50px;
        stroke: currentColor;
        stroke-width: 2px;
        stroke-dasharray: 200;
    }

    .burger:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: currentColor;
        transform-origin: bottom;
        transition: transform .3s ease;
        transform: scale(1, 0);
    }

    .burger:hover:after {
        transform-origin: top;
        transform: scale(1, 1);
    }

    .burger .slices, .burger .closes, .burger .slices > span, .burger .closes > span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .burger .slices, .burger .closes {
        z-index: 200;
        mix-blend-mode: difference;
    }

    .burger .slices > span { transform-origin: left }

    .burger .slices > span:first-child { transform: translate(-50%, -5px) }
    .burger .slices > span:last-child { transform: translate(-50%, 5px) }

    .burger span, .burger .closes {
        width: 16px;
        height: 1px;
    }

    .burger span {
        display: block;
        background-color: currentColor;
        transition: all .3s ease;
    }

    .burger .closes > span {
        width: 0;
    }

    .burger .closes > span:first-child {  transform: translate(-50%, -50%) rotate(45deg) }
    .burger .closes > span:last-child { transform: translate(-50%, -50%) rotate(-45deg) }
    
</style>