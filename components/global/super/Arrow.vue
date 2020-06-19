<template>
  <div @click="onClick" class="flex cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 16.97" :class="`w-full ${!hover && 'hovered'}`">
      <line y1="8.49" x2="30.48" y2="8.49" class="arrow-line transition-transform duration-300" />
      <line class="cls-1" x1="22.8" y1="0.71" x2="31.29" y2="9.19" />
      <line class="cls-1" x1="22.81" y1="16.26" x2="31.29" y2="7.78" />
    </svg>
  </div>
</template>

<script>
export default {
    props: {
      hover: {
        type: Boolean,
        default: false,
      },
        onClick: {
            type: Function,
            default: () => {}
        }
    }
};
</script>

<style lang="scss" scoped>
svg {
  max-width: 24px;
  stroke: currentColor;
  stroke-width: 2px;

  &.hovered .arrow-line, &:hover .arrow-line { stroke-dashoffset: -60% }
}

.arrow-line {
  transform: translateX(-10px);
  stroke-dasharray: 100%;
  stroke-dashoffset: -120%;
  transition: stroke-dashoffset .3s ease;
}
</style>