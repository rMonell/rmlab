<template>
    <div class="flex-column items-center index-10">
        <div>
            <MagicTitle
                value="Me contacter"
                tag="h1"
                className="font-xl weight-700 uppercase mb-l align-center m:align-left"

                from="bottom"
                to="initialY"
            />

            <div class="mbox-bm contact-list">
                <a class="flex-row items-center" href="https://www.linkedin.com/in/renaud-monell/" target="_blank">
                    <i class="mr-m">
                        <img src="~/assets/images/linkedin.svg">
                    </i>
                    <span class="font-l-400">https://www.linkedin.com/in/renaud-monell/</span>
                </a>
                <a class="flex-row items-center" href="mailto:renaud.monell@gmail.com">
                    <i class="mr-m">
                        <img src="~/assets/images/mail.svg">
                    </i>
                    <span class="font-l-400">renaud.monell@gmail.com</span>
                </a>
            </div>
           
        </div>
    </div>
</template>

<script>
import MagicTitle from '~/components/global/super/MagicTitle.vue'
import { TimelineLite, Expo } from 'gsap'

export default {
    components: {
        MagicTitle
    },

     mounted() {
        const timeline = new TimelineLite() 
        const easing = Expo.easeInOut

        timeline.staggerFromTo(
            '.contact-list > a',
            1.5,
            { x: 150, alpha: 0, ease: easing },
            { x: 0, alpha: 1, ease: easing },
            .15,
        )
    }
}
</script>