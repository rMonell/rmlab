<template>
    <div class="relative textfield" ref="textfield">
        <label class="text-base font-normal absolute left-0 px-md pointer-events-none" ref="label">{{ label }}</label>
        <component
            :is="tag"
            :value="value"
            :name="name"
            :type="type"
            class="bg-transparent border-none resize-none px-md h-full focus:outline-none w-full py-md"
            @input="$emit('input', $event.target.value)"
            @focus="isFocused = true"
            @blur="handleBlur"
        />

    </div>
</template>

<script>
import { gsap } from "gsap/dist/gsap";

export default {
    props: {
        name: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        value: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        tag: {
            type: String,
            default: 'input'
        }
    },
    data() {
        return { isFocused: false }
    },
    watch: {
        isFocused() {        
           this.isFocused && this.$refs['textfield'].classList.add('is-focused', 'has-label')
        }
    },
    methods: {
        handleBlur() {
            event.target.value === '' && this.$refs['textfield'].classList.remove('has-label')

            this.isFocused = false
            this.$refs['textfield'].classList.remove('is-focused')
        }
    },
    mounted() {
        const timeline = gsap.timeline() 
        const easing = 'Expo.easeInOut'

        timeline.fromTo(
            this.$refs['textfield'],
            { width: '0%' },
            { duration: 1.5, width: '100%', ease: easing }
        ),
        timeline.to(
            this.$refs['label'],
            { duration: 1.5, alpha: 1, ease: easing },
            '-=1'
        )
    }
}
</script>

<style lang="scss" scoped>
    .textfield {
        &.is-focused:after { transform: scale3d(1, 1, 1) }

        &.has-label label {
            font-size: 12px;
            top: -8px;
        }

        label {
            opacity: 0;
            top: 5px;
            transition: all .3s ease;
        }

        &:before, &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
        }

        &:before {
            background-color: currentColor;
            opacity: .5;
        }

        &:after {
            background-color: currentColor;
            transform: scale3d(0, 1, 1);
            transform-origin: left;
            transition: transform .3s ease;
        }
    }
</style>