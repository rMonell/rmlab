<template>
  <button
    :type="type"
    class="border-2 text-sm font-bold uppercase px-lg py-2 focus:outline-none hover:bg-current transition-colors"
    @click="onClick"
  >
    <span class="mix-difference">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false
    },
    onClick: {
      type: Function,
      required: false
    }
  }
};
</script>