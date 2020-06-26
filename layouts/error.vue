<template>
    <h1 class="text-2xl sm:text-5xl uppercase font-bold">{{ title }}</h1>
</template>

<script>
    export default {
        head() {
            return {
                title: this.title,
                description: this.description
            }
        },
        props: ['error'],
        data() {
            const result = this.error.statusCode === 404 ? '404' : 'error'
            return { errorType: result }
        },
        computed: {
            title() {
                return this.$store.state.locale.staticTrans.error[this.$store.state.locale.value].head.title[this.errorType]
            },
            description() {
                return this.$store.state.locale.staticTrans.error[this.$store.state.locale.value].head.description[this.errorType]
            }
        }
    }
</script>