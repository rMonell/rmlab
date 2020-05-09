<template>
    <div class="flex-column items-center index-10">
        <div class="align-center">
            <MagicTitle
                value="Renaud Monell"
                tag="h1"
                className="font-hero-700 uppercase"

                from="bottom"
                to="initialY"
            />
            <MagicTitle
                value="Développeur front-end"
                tag="h2"
                className="font-l-400"

                from="bottom"
                to="initialY"
                :delay=".15"
            />
        </div>
        <div class="mt-m flex-column justify-end items-center position-absolute-b pb-l fill-container">
            <span
                ref="fill"
                class="fill"
            />
            <MagicTitle
                value="Scroll"
                tag="span"
                className="font-m"

                from="bottom"
                to="initialY"
                :delay=".15"
            />
        </div>
    </div>
</template>

<script>
import { TimelineLite, Expo } from 'gsap'
import MagicTitle from '~/components/global/super/MagicTitle.vue'

export default {
    components: {
        MagicTitle
    },

    mounted() {
        const { fill } = this.$refs
        const timeline = new TimelineLite() 
        const easing = Expo.easeInOut

        timeline.fromTo(
            fill,
            .75,
            { height: 0, ease: easing },
            { height: 60, ease: easing },
        )
    }
}
</script>

<style>
    .fill-container:hover .fill {
        height: 40px !important;
    }

    .fill {
        display: block;
        background-color: currentColor;
        width: 1px;
        height: 0;
        transition: height .3s ease;
    }
</style>