<template>
    <div class="mw-50 mh-auto">
        <MagicTitle
            value="À propos"
            tag="h1"
            className="font-xl-700 uppercase mb-l"

            from="bottom"
            to="initialY"
        />
        <div class="font-l-400 mbox-bm" ref="para">
            <p>Etiam vitae tortor. Nullam accumsan lorem in dui. Proin faucibus arcu quis ante. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <p>Etiam vitae tortor. Nullam accumsan lorem in dui. Proin faucibus arcu quis ante. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
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