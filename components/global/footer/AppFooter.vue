<template>
    <footer class="fixed bottom-0 left-0 flex flex-row justify-between items-center w-full p-lg md:p-xl z-40">
        <div class="mix-difference">
            <span
                class="text-xs cursor-pointer"
                @click="setStore('locale', locale.value)"
            > {{ locale.text }}</span>
        </div>
        <div class="flex">
            <span
                class="rounded-full w-4 h-4 border-2 border-current bg-black cursor-pointer mr-sm"
                @click="setStore('theme', 'dark')"
            />
            <span
                class="rounded-full w-4 h-4 border-2 border-current bg-white cursor-pointer"
                @click="setStore('theme', 'light')"
            />
        </div>
    </footer>
</template>

<script>
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
    }
}
</script>