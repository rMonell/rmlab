<template>
    <Fragment>
        <div class="flex flex-col items-center z-10">
            <div class="text-center">
                <MagicTitle
                    value="Renaud Monell"
                    tag="h1"
                    className="font-bold md:text-6xl text-3xl uppercase"

                    from="bottom"
                    to="initialY"
                />
                <MagicTitle
                    value="Développeur front-end"
                    tag="h2"
                    className="text-xl font-normal"

                    from="bottom"
                    to="initialY"
                    :delay=".15"
                />
            </div>
            <div class="mt-m flex flex-col justify-end items-center absolute bottom-0 pb-xl fill-container">
                <span
                    ref="fill"
                    class="fill"
                />
                <MagicTitle
                    value="Scroll"
                    tag="span"
                    className="text-sm mt-sm"
                    from="bottom"
                    to="initialY"
                    :delay=".15"
                />
            </div>
        </div>
        <HeroScene />
    </Fragment>
</template>

<script>
import MagicTitle from '~/components/global/super/MagicTitle.vue'
import HeroScene from '~/components/scenes/HeroScene.vue'

import { TimelineLite, Expo } from 'gsap'
import { Fragment } from 'vue-fragment'

export default {
    components: {
        MagicTitle, Fragment, HeroScene
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