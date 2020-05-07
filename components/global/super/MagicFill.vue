<template>
    <span
        ref="fill"
        :class="'fill ' + className"
        :style="{ width: styles.width,  height: styles.height}"
    />
</template>

<script>
import { TimelineLite, Expo } from 'gsap'

export default {
    props: {
        width: {
            type: String,
            required: true
        },
        height: {
            type: String,
            required: true
        },
        from: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        },
        target: {
            type: String,
            required: true
        },
        className: {
            type: String,
            required: false
        },
        duration: {
            type: Number,
            required: false
        },
        delay: {
            type: Number,
            required: false
        },
    },

    data() {
        return {
            styles: {
                width: this.width,
                height: this.height
            }
        }
    },

     mounted() {
        const { fill } = this.$refs
        const timeline = new TimelineLite() 
        const easing = Expo.easeInOut

        const duration = this.duration === undefined ? 1.5 : this.duration
        const delay = this.delay === undefined ? 0 : this.delay

        timeline.fromTo(
            fill,
            duration,
            { [this.target]: [this.from], ease: easing },
            { [this.target]: [this.to], ease: easing },
            delay
        )

        timeline.to(fill, 1, { height: 60, ease: easing })
    }
}
</script>

<style>
    .fill {
        display: block;
        background-color: currentColor;
    }
</style>