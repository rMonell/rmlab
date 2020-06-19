<template>
  <component
    :is="tag"
    :type="type"
    class="border-2 text-sm font-bold uppercase px-lg py-2 focus:outline-none hover:bg-current transition-colors duration-300"
    @click="onClick"
  >
    <span class="mix-difference pointer-events-none">
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
  }
};
</script>