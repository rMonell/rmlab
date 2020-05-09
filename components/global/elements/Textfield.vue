<template>
    <div :class="filteredClassName + (focused ? ' is-focus' : '')">
        <label>{{ placeholder }}</label>
        <component
            ref="input"

            :is="tag"
            :type="type"
            :name="name"

            @change="onChange"
            @focus="handleFocus"
            @blur="handleBlur"
        />
        <div></div>
    </div>
</template>

<script>
export default {
    props: {
        tag: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        className: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        onChange: {
            type: Function,
            required: false
        }
    },

    data() {
        return {
            focused: false,
            filteredClassName: ''
        }
    },

    mounted() {
        this.filteredClassName = 'textfield' + ' ' + this.tag + (this.className ? ' ' + this.className : '')
    },

    methods: {
        handleFocus() {
            this.focused = true
        },

        handleBlur(event) {
            this.focused = (this.$refs['input'].value === '') ? false : true
        }
    }
}
</script>

<style>
    .textfield {
        position: relative;
        border: 2px solid ;
    }

    .textfield.is-focus label {
        padding: 0 20px;
        left: 0;
        font-size: 16px;
    }

    .textfield.input { height: 60px }
    .textfield.textarea { height: 200px }

    .textfield.is-focus.input label { transform: translateY(-170%) }
    .textfield.is-focus.textarea label { transform: translateY(-120%) }

    .textfield *:not(label) {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;
    }
    
    .textfield *:not(label):focus { outline: none }

    .textfield label {
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        transition: all .3s ease;
        background-color: #000;
        padding: 0;
    }

    .textfield.input label {
        top: 50%;
        transform: translateY(-50%);
    }

    .textfield.textarea label {
        top: 20px;
        transform: translateY(0);
    }

    .textfield input { padding: 0 20px }

    .textfield textarea { padding: 20px }
</style>