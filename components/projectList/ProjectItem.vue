<template>
  <article class="flex justify-center md:items-stretch relative">
    <div class="flex flex-col justify-center items-start w-4/5 sm:w-3/5 md:w-2/5 z-10" ref="projectContent">
      <div>
        <h1 class="md:text-5xl text-3xl font-bold leading-tight uppercase mb-md">{{ item.fields.name }}</h1>
        <div class="mb-lg flex">
          <div class="mr-lg">
            <h2 class="font-bold text-base">Rôle</h2>
            <div class="flex">
              <div v-for="(role, key) in item.fields.role" :key="key">
                <span class="text-sm">{{ role.fields.name }}</span>
                <span class="text-sm mx-sm" v-if="key != item.fields.role.length - 1">/</span>
              </div>
            </div>
          </div>
          <div>
            <h2 class="font-bold text-base">Année</h2>
            <div class="flex">
              <span class="text-sm">{{ item.fields.year }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-lg text-sm md:text-base" v-html="getProjectPreview(item.fields.body)" />
      <app-button tag="a" :onClick="handleClick" :href="`/projects/${item.fields.slug}`">En savoir plus</app-button>
    </div>
    <div class="absolute pin-c h-64 flex items-center w-11/12 md:w-4/5">
      <div
        class="absolute bottom-0 h-full bg-cover bg-center bg-no-repeat w-full opacity-25"
        :style="`background-image: url(${item.fields.mainPicture.fields.file.url})`"
        ref="projectImage"
      />
    </div>
  </article>
</template>


<script>
import { TimelineLite, Expo } from "gsap";
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
    const timeline = new TimelineLite();
    const easing = Expo.easeInOut;

    timeline.from(
      this.$refs["projectImage"],
      1,
      { height: 0, ease: easing },
      .5
    );

    timeline.from(
      this.$refs["projectImage"],
      1.5,
      { alpha: 1, ease: easing },
      "-=.5"
    );

    timeline.fromTo(
      this.$refs["projectContent"],
      1.5,
      { alpha: 0, y: -150 },
      { alpha: 1, y: 0, ease: easing },
      "-=1.5"
    );
  },
  methods: {
    getProjectPreview(field) {
      return documentToHtmlString(field).length > 150
        ? documentToHtmlString(field).substring(0, 150) + "..."
        : documentToHtmlString(field).substring(0, 150);
    },
    handleClick(event) {
        event.preventDefault()
        this.navigator.set(event.target.getAttribute('href'))
    }
  }
};
</script>