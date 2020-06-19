<template>
  <section
    id="app-section"
    :class="sectionClassName"
    @wheel="handleScroll"
    v-touch:swipe.top="() => !this.$route.params.slug && navigator.prev(this.$store)"
    v-touch:swipe.bottom="() => !this.$route.params.slug && navigator.next(this.$store)"
    ref="section"
  >

      <slot v-if="canRenderSlot" />

  </section>
</template>

<script>
import Vue from "vue";
import Vue2TouchEvents from "vue2-touch-events";
Vue.use(Vue2TouchEvents);

export default {
  data() {
    return {
      navigator: new this.$Navigator(this.$store, this.$router),
      y: 0,
      canRenderSlot: true
    };
  },
  computed: {
    route() {
      return this.$route
    },
    sectionClassName() {
      return `w-full flex flex-row justify-center items-center relative transition-transform duration-300 ease-out-min z-back ${!this
        .$route.params.slug && "h-screen p-lg md:p-xl"}`;
    }
  },
  watch: {
    route() {
      this.canRenderSlot = false
      setTimeout(() => this.canRenderSlot = true, 750);
    }
  },
  methods: {
    handleScroll(event) {

      if (!this.$route.params.slug) {
        event.deltaY > 0
          ? this.navigator.next(this.$store)
          : this.navigator.prev(this.$store);
      } else {
        event.deltaY > 0 ? this.translateSection(-1) : this.translateSection(1);
      }
    },
    translateSection(direction) {
      const amount = 80 * direction;

      if (this.y + amount > 0) {
        this.y = 0;
      } else if (this.y + amount <= (this.$refs['section'].clientHeight - document.body.offsetHeight) * -1) {
        this.y = (this.$refs['section'].clientHeight - document.body.offsetHeight) * -1
      } else this.y = this.y + amount;

      this.$refs["section"].style.transform = `translateY(${this.y}px)`;
    }
  }
};
</script>