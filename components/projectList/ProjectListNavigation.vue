<template>
  <div @click="indexChange(action === 'next' ? index + 1 : index - 1)" :class="`svg-container cursor-pointer ${action}`">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 16.97" class="w-full">
      <line y1="8.49" x2="30.48" y2="8.49" class="arrow-line" />
      <line class="cls-1" x1="22.8" y1="0.71" x2="31.29" y2="9.19" />
      <line class="cls-1" x1="22.81" y1="16.26" x2="31.29" y2="7.78" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    action: {
      type: String,
      default: 'next'
    },
    index: {
        type: Number,
        required: true
    }
  },
  methods: {
    indexChange(index) {
      this.$emit("index-change", index);
    }
  }
};
</script>

<style lang="scss" scoped>
svg {
  max-width: 24px;
  stroke: currentColor;
  stroke-width: 2px;
}

.arrow-line {
  stroke-dasharray: 100%;
  stroke-dashoffset: -10%;
  transition: stroke-dashoffset .3s ease;
}

.svg-container {
    transition: transform .5s ease;

    &.prev { transform: rotate(180deg) }

    &:hover {
        .arrow-line { stroke-dashoffset: -20% }
    } 
}
</style>