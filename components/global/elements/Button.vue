<template>
    <button
        :type="type"

        :class="'button' + (className ? ' ' + className : '')"

        @click="onClick ? onClick : ''"
    >
    {{ value }}
    </button>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: false
        },
        className: {
            type: String,
            required: false
        },
        onClick: {
            type: Function,
            required: false
        }
    }
}
</script>

<style>
    .button {
        height: 50px;
        border: none;
        background-color: #fff;
        color: #000;
        font-size: 20px;
        cursor: pointer;
        font-weight: 700;
    }
</style>