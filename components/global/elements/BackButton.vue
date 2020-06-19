<template>
    <div class="overflow-hidden">
        <div class="flex items-center cursor-pointer" @click="handleClick" ref="arrow">
            <arrow class="transform rotate-180" />
            <span class="text-base font-normal ml-sm">{{ title }}</span>
        </div>
    </div>
</template>

<script>
import { TimelineLite, Expo } from "gsap";
import Arrow from "~/components/global/super/Arrow";

export default {
  components: {
    'arrow': Arrow
  },
  data() {
    return {
      navigator: new this.$Navigator(this.$store, this.$router),
    }
  },
  computed: {
    title() {
      return this.$store.state.locale.staticTrans.components[this.$store.state.locale.value].backButton
    }
  },
  methods: {
    handleClick(event) {
        event.preventDefault()
        this.navigator.set('/projects')
    }
  },
  mounted() {
    const timeline = new TimelineLite();
    const easing = Expo.easeInOut;

    timeline.from(this.$refs["arrow"], 1.5, { y: "100%", ease: easing });
  }
};
</script>