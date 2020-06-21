<template>
    <div class="overflow-hidden">
        <div class="flex items-center cursor-pointer net-button" @click="handleClick" ref="netContainer">
            <app-fragment v-if="pattern === 'n-t'">
              <span :class="`${netClass} mr-md net`" ref="net" />
              <span :class="textClass">{{ text }}</span>
            </app-fragment>

            <app-fragment v-else>
              <span :class="`${textClass} mr-md`">{{ text }}</span>
              <span :class="`${netClass} net`" ref="net" />
            </app-fragment>
        </div>
    </div>
</template>

<script>
import { Fragment } from 'vue-fragment'
import { gsap } from "gsap/dist/gsap";

export default {
  components: {
    'app-fragment': Fragment,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    pattern: {
      type: String,
      default: 'n-t'
    },
    to: {
      type: String,
      required: false
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      navigator: new this.$Navigator(this.$store, this.$router),
      netClass: 'border-b border-current',
      textClass: 'text-xs uppercase font-bold'
    }
  },
  methods: {
    handleClick(event) {
        event.preventDefault()
        this.to ? this.navigator.set(this.to) : this.onClick()
    }
  },
  mounted() {
    const timeline = gsap.timeline();
    const easing = 'Expo.easeInOut';

    timeline.from(this.$refs["netContainer"], { duration: 1.5, y: "100%", ease: easing });
    timeline.fromTo(this.$refs["net"], { width: 0 }, { duration: 1, width: 16, ease: easing }, "-=1");
  }
};
</script>

<style scoped>
  .net { transition: width .3s ease }
  .net-button:hover .net { width: .5rem !important }
</style>