<template>
  <component
    :is="tag"
    :type="type"
    :class="`border-2 text-sm font-bold uppercase px-lg py-2 focus:outline-none transition-colors duration-300 ${themeClassName}`"
    @click="onClick"
  >
    <span class="pointer-events-none">
      <slot />
    </span>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      required: false
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    themeClassName() {
      const fix = this.$store.state.theme.value === 'dark' ? 'border-white' : 'border-black'
      const hover = this.$store.state.theme.value === 'dark' ? 'hover:bg-white hover:color-dark hover:text-black' : 'hover:bg-black hover:color-white hover:text-white'

      return `${fix} ${hover}`
    }
  }
};
</script>