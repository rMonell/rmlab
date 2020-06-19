<template>
  <div class="flex flex-col items-center z-10">
    <div>
      <magic-title
        :value="title"
        tag="h1"
        class="text-4xl font-bold uppercase mb-xl text-center md:text-left"
        from="bottom"
        to="initialY"
      />

      <div class="contact-list">
        <a
          class="flex flex-row items-center mb-xl"
          href="https://www.linkedin.com/in/renaud-monell/"
          target="_blank"
        >
          <linkedin class="mr-lg" />
          <span class="text-lg leading-none">https://www.linkedin.com/in/renaud-monell/</span>
        </a>
        <a class="flex flex-row items-center" href="mailto:renaud.monell@gmail.com">
          <mail class="mr-lg" />
          <span class="text-lg leading-none">renaud.monell@gmail.com</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineLite, Expo } from "gsap";

import Linkedin from "~/components/vectors/Linkedin";
import Mail from "~/components/vectors/Mail";
import MagicTitle from "~/components/global/super/MagicTitle";

export default {
  components: {
    'magic-title': MagicTitle,
    'linkedin': Linkedin,
    'mail': Mail
  },

  mounted() {
    const timeline = new TimelineLite();
    const easing = Expo.easeInOut;

    timeline.staggerFromTo(
      ".contact-list > a",
      1.5,
      { x: 150, alpha: 0, ease: easing },
      { x: 0, alpha: 1, ease: easing },
      0.15
    );
  },

  computed: {
    title() {
      return this.$store.state.locale.staticTrans.contact[
        this.$store.state.locale.value
      ].title;
    }
  }
};
</script>