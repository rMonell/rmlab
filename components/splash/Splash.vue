<template>
    <div class="w-full h-full flex flex-row justify-center items-center">
        <div class="main-progress overflow-hidden">
            <span ref="mainProgress" class="block font-bold">{{ progress.value + '%' }}</span>
        </div>
        <span ref="backgroundProgress" class="background-progress absolute pin-c font-bold">{{ progress.value + '%' }}</span>

        <div class="progress-overlay w-full h-full absolute top-0 left-0" ref="progressOverlay"></div>
    </div>
</template>

<script>
import { gsap } from "gsap/dist/gsap";

export default {
    props: {
        setLoading: {
            type: Function,
            required: true
        }
    },

    data() {
        return {
            duration: 1500,
            progress: { value: 0 },
        }
    },

    mounted() {
        const loadingTimeline = gsap.timeline({ paused: true })
        const easing = 'Expo.easeOut'

        setTimeout(() => loadingTimeline.play(), 250)

        loadingTimeline.to(
            this.progress,
            { duration: 2.5, value: 100, roundProps: 'value', ease: easing, onComplete: () => this.complete() }
        )

        loadingTimeline.to(
            this.$refs["progressOverlay"],
            { duration: 2.5, height: '0%' },
            '-=2.5'
        )
    },

    methods: {
        complete() {
            const { mainProgress, backgroundProgress } = this.$refs
            const timeline = gsap.timeline() 
            const easing = 'Expo.easeInOut'

            clearInterval(this.interval)

            timeline.to(mainProgress, { duration: 1.2, y: '100%', ease: easing })

            timeline.to(
                backgroundProgress,
                { duration: 1.2, scale: 1.2, alpha: 0, ease: easing, onComplete: () => this.setLoading(true) },
                '-= 1.2'
            )
        }
    }
}
</script>


<style>
    .main-progress {
        font-size: 100px;
        line-height: 80px;
    }

    .background-progress {
        font-size: 44vw;
        opacity: .16;
    }

    .progress-overlay {
        background-color: currentColor;
        mix-blend-mode: difference;
    }
</style>