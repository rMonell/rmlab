<template>
    <fragment>
        <div class="flex flex-col items-center z-10">
            <div class="text-center">
                <magic-title
                    value="Renaud Monell"
                    tag="h1"
                    className="font-bold md:text-6xl text-3xl uppercase"

                    from="bottom"
                    to="initialY"
                />
                <magic-title
                    :value="specialization"
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
                <magic-title
                    :value="scrollIndication"
                    tag="span"
                    className="text-sm mt-sm"
                    from="bottom"
                    to="initialY"
                    :delay=".15"
                />
            </div>
        </div>
    </fragment>
</template>

<script>
import { gsap } from "gsap/dist/gsap";
import { Fragment } from 'vue-fragment'

import MagicTitle from '~/components/global/super/MagicTitle.vue'

export default {
    components: {
        'magic-title': MagicTitle,
        'fragment': Fragment
    },

    computed: {
        specialization() {
            return this.$store.state.locale.staticTrans.index[this.$store.state.locale.value].specialization
        },
        scrollIndication() {
            return this.$store.state.locale.staticTrans.index[this.$store.state.locale.value].scrollIndication
        }
    },

    mounted() {
        const { fill } = this.$refs
        const timeline = gsap.timeline() 
        const easing = 'Expo.easeInOut'

        timeline.fromTo(
            fill,
            { height: 0, ease: easing },
            { duration: .75, height: 60, ease: easing },
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