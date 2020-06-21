<template>
    <footer class="fixed bottom-0 left-0 w-full my-lg px-lg md:my-xl md:px-xl z-40 overflow-hidden mix-difference text-white pointer-events-none">
        <div class="flex flex-row justify-between items-center w-full" ref="footerInner">
            <span
                class="text-xs cursor-pointer pointer-events-auto"
                @click="setStore('locale', locale.value)"
            > {{ locale.text }}</span>
            <div class="flex pointer-events-auto">
                <span
                    class="rounded-full w-4 h-4 border-2 border-current bg-black cursor-pointer mr-sm"
                    @click="setStore('theme', 'dark')"
                />
                <span
                    class="rounded-full w-4 h-4 border-2 border-current bg-white cursor-pointer"
                    @click="setStore('theme', 'light')"
                />
            </div>
        </div>
    </footer>
</template>

<script>
import { gsap } from "gsap/dist/gsap";

export default {
    computed: {
        locale() {
            const result = this.$store.state.locale.value === 'fr-FR' ? 'en-US' : 'fr-FR'

            return {
                text: result.slice(0, 2).toUpperCase(),
                value: result
            }
        }
    },
    methods: {
        setStore(target, value) {
            this.$store.commit(target + '/set', value)
        }
    },
    mounted() {
        const timeline = gsap.timeline();
        const easing = 'Expo.easeInOut';

        timeline.from(this.$refs["footerInner"], { duration: 1.5, y: "100%", ease: easing });
    }
}
</script>