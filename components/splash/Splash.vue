<template>
    <div class="w-100 h-100 flex-row justify-center items-center">
        <div class="main-progress overflow-hidden">
            <span ref="mainProgress" class="block weight-700">{{ progress.value + '%' }}</span>
        </div>
        <span ref="backgroundProgress" class="background-progress position-absolute-c weight-700">{{ progress.value + '%' }}</span>

        <div class="progress-overlay w-100 h-100 position-absolute-tl" ref="progressOverlay"></div>
    </div>
</template>

<script>
import { TimelineLite, Expo } from 'gsap'

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
        const loadingTimelone = new TimelineLite({ paused: true })
        const easing = Expo.easeOut

        setTimeout(() => loadingTimelone.play(), 250)

        loadingTimelone.to(
            this.progress,
            2.5,
            {value: 100, roundProps: 'value', ease: easing, onComplete: () => this.complete()}
        )

        loadingTimelone.to(
            this.$refs["progressOverlay"],
            2.5,
            {height: '0%'},
            '-=2.5'
        )
    },

    methods: {
        complete() {
            const { mainProgress, backgroundProgress } = this.$refs
            const timeline = new TimelineLite() 
            const easing = Expo.easeInOut

            clearInterval(this.interval)

            timeline.to(mainProgress, 1.2, {y: '100%', ease: easing })

            timeline.to(
                backgroundProgress,
                1.2,
                {scale: 1.2, alpha: 0, ease: easing, onComplete: () => this.setLoading(true) },
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