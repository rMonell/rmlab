<template>
    <magic-title
        :value="title"
        tag="h1"
        className="text-2xl sm:text-5xl uppercase font-bold"
        from="bottom"
        to="initialY"
    />
</template>

<script>
import MagicTitle from '~/components/global/MagicTitle.vue'

export default {
    head() {
        return {
            title: this.title,
            description: this.description
        }
    },
    components: {
        'magic-title': MagicTitle,
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