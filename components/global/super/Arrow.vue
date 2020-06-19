<template>
  <div @click="onClick" class="svg-container flex cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 16.97" class="w-full">
      <line y1="8.49" x2="30.48" y2="8.49" class="arrow-line transition-transform duration-300" />
      <line class="cls-1" x1="22.8" y1="0.71" x2="31.29" y2="9.19" />
      <line class="cls-1" x1="22.81" y1="16.26" x2="31.29" y2="7.78" />
    </svg>
  </div>
</template>

<script>
export default {
    props: {
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
}

.arrow-line {
  stroke-dasharray: 100%;
  stroke-dashoffset: -40%;
  transition: stroke-dashoffset .3s ease;
}

.svg-container:hover .arrow-line { stroke-dashoffset: -50% }
</style>