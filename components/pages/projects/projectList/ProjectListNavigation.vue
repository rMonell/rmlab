<template>
    <div class="overflow-y-hidden px-lg">
        <div class="flex flex-row justify-between w-full relative" ref="carrouselNavContainer">
            <net-button
                :text="previous"
                :onClick="() => goToItem(index - 1)"
                pattern="n-t"
            />
            <div class="flex flex-row items-center text-xs absolute pin-c">
                <span class="font-bold italic">{{ index + 1 }}</span>
                <span class="mx-md border-b border-current w-4 opacity-50" ref="sep" />
                <span class="font-bold italic">{{ length }}</span>
            </div>
            <net-button
                :text="next"
                :onClick="() => goToItem(index + 1)"
                pattern="t-n"
            />
        </div>
    </div>
</template>


<script>
import { gsap } from "gsap/dist/gsap"

import NetButton from "~/components/global/NetButton"

export default {
  components: {
    'net-button': NetButton
  },
  props: {
    index: {
        type: Number,
        required: true
    },
    length: {
      type: Number,
      required: true
    }
  },
  computed: {
      next() {
          return this.$store.state.locale.staticTrans.projects[this.$store.state.locale.value].next
      },
      previous() {
          return this.$store.state.locale.staticTrans.projects[this.$store.state.locale.value].previous
      }
  },
  methods: {
    goToItem(index) {
        this.$emit('index-changed', index)
    },
  },
  mounted() {
    const timeline = gsap.timeline();
    const easing = 'Expo.easeInOut';

    timeline.from(this.$refs["carrouselNavContainer"], {
      duration: 1.5,
      y: "100%",
      ease: easing
    });
    timeline.from(this.$refs["sep"], {
      duration: 1.5,
      width: 0,
      ease: easing
    }, '-=1');
  }
};
</script>