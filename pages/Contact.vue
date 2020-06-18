<template>
  <div class="flex flex-col items-center z-10">
    <div>
      <MagicTitle
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
          <i class="mr-lg">
            <img src="~/assets/images/linkedin.svg" />
          </i>
          <span class="text-lg leading-none">https://www.linkedin.com/in/renaud-monell/</span>
        </a>
        <a class="flex flex-row items-center" href="mailto:renaud.monell@gmail.com">
          <i class="mr-lg">
            <img src="~/assets/images/mail.svg" />
          </i>
          <span class="text-lg leading-none">renaud.monell@gmail.com</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import MagicTitle from "~/components/global/super/MagicTitle.vue";
import { TimelineLite, Expo } from "gsap";

export default {
  components: {
    MagicTitle
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