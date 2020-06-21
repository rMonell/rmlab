<template>
  <article class="flex justify-center items-center relative w-full">
  <div class="relative h-screen/2 flex items-center w-11/12 md:w-2/5 -ml-lg">
      <div
        class="absolute bottom-0 h-0 bg-gray-700 bg-cover bg-center bg-no-repeat w-full"
        :style="`background-image: url(${item.fields.mainPicture.fields.file.url})`"
        ref="projectImage"
      />
    </div>
    <div class="flex flex-col justify-center items-start w-4/5 sm:w-3/5 md:w-2/5 z-10 -ml-lg" ref="projectContent">
      <div>
        <h1 class="text-5xl md:text-6xl text-3xl font-bold leading-tight uppercase mb-md text-shadow">{{ item.fields.name }}</h1>
        <div class="mb-lg ml-xl flex">
          <div class="mr-lg">
            <h2 class="font-bold text-base">{{ role }}</h2>
            <div class="flex">
              <div v-for="(role, key) in item.fields.role" :key="key">
                <span class="text-sm">{{ role.fields.name }}</span>
                <span class="mx-sm text-sm" v-if="key != item.fields.role.length - 1">-</span>
              </div>
            </div>
          </div>
          <div>
            <h2 class="font-bold text-base">{{ year }}</h2>
            <div class="flex">
              <span class="text-sm">{{ item.fields.year }}</span>
            </div>
          </div>
        </div>
      </div>
      <app-button class="ml-xl" tag="a" :onClick="handleClick" :href="`/projects/${item.fields.slug}`">En savoir plus</app-button>
    </div>
  </article>
</template>


<script>
import { gsap } from "gsap/dist/gsap";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import AppButton from "../global/elements/AppButton";

export default {
  components: {
    "app-button": AppButton
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      navigator: new this.$Navigator(this.$store, this.$router)
    }
  },
  mounted() {
    const timeline = gsap.timeline();
    const easing = 'Expo.easeInOut';

    timeline.fromTo(
      this.$refs["projectImage"],
      { height: '0%', ease: easing },
      { duration: 2, height: '100%', ease: easing },
    );

    timeline.fromTo(
      this.$refs["projectContent"],
      { alpha: 0, x: -150 },
      { duration: 1.5, alpha: 1, x: 0, ease: easing },
      "-=1.5"
    );
  },
  computed: {
    role() {
      return this.$store.state.locale.staticTrans.projects[this.$store.state.locale.value].role
    },
    year() {
      return this.$store.state.locale.staticTrans.projects[this.$store.state.locale.value].year
    }
  },
  methods: {
    handleClick(event) {
        event.preventDefault()
        this.navigator.set(event.target.getAttribute('href'))
    }
  }
};
</script>