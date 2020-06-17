<template>
    <div class="max-w-full text-center m:mw-50 md:text-left mx-auto">
        <MagicTitle
            value="À propos"
            tag="h1"
            className="text-4xl font-bold uppercase mb-xl"

            from="bottom"
            to="initialY"
        />
        <div class="text-lg" ref="para">
            <p class="mb-md last:mb-0">Etiam vitae tortor. Nullam accumsan lorem in dui. Proin faucibus arcu quis ante. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <p class="mb-md last:mb-0">Etiam vitae tortor. Nullam accumsan lorem in dui. Proin faucibus arcu quis ante. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
    </div>
</template>

<script>
import { TimelineLite, Expo } from 'gsap'
import MagicTitle from '~/components/global/super/MagicTitle.vue'

export default {
    components: {
        MagicTitle,
    },

    mounted() {
        const { para } = this.$refs
        const timeline = new TimelineLite() 
        const easing = Expo.easeInOut

        timeline.staggerFromTo(
            para,
            1.5,
            { x: 200, alpha: 0,  ease: easing },
            { x: 0, alpha: 1,  ease: easing },
            .25
        )
    }
}
</script>