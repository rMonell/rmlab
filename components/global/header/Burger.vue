<template>
    <div class="burger" @click="handleClick">
        <div class="slices">
            <span  v-for="i in 3" :key="i" ref="slice"></span>
        </div>
        <div class="closes">
            <span  v-for="i in 2" :key="i" ref="close"></span>
        </div>
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
            const { slice, close } = this.$refs
            const easing = Expo.easeInOut

            this.timeline.staggerTo(slice, .4, {scaleX: 0, ease: easing}, .1)
            this.timeline.staggerTo(close, .5, {width: 16, ease: easing}, .1, '+=.25')
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
        border: 1px solid;
        cursor: pointer;
    }

    .burger:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: currentColor;
        mix-blend-mode: difference;
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