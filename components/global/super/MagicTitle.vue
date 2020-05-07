<template>
    <div class="overflow-hidden">
        <component ref="title" :is="tag" :class="'block ' + className">{{ value }}</component>
    </div>
</template>

<script>
import { TimelineLite, Expo } from 'gsap'

export default {
    props: {
        value: {
            type: [String, Number],
            required: true
        },
        tag: {
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
            directions: {
                top: {
                    value: '-100%',
                    axis: 'y'
                },
                right: {
                    value: '100%',
                    axis: 'x'
                },
                bottom: {
                    value: '100%',
                    axis: 'y'
                },
                left: {
                    value: '-100%',
                    axis: 'x'
                },
                initialX: {
                    value: '0%',
                    axis: 'x'
                },
                initialY: {
                    value: '0%',
                    axis: 'y'
                },
            }
        }
    },

    mounted() {
        const { title } = this.$refs
        const timeline = new TimelineLite() 
        const easing = Expo.easeInOut

        const duration = this.duration === undefined ? 1.5 : this.duration
        const delay = this.delay === undefined ? 0 : this.delay
        
        timeline.fromTo(
            title,
            duration,
            { [this.directions[this.from].axis]: [this.directions[this.from].value], ease: easing },
            { [this.directions[this.to].axis]: [this.directions[this.to].value], ease: easing },
            delay
        )
    }
}
</script>