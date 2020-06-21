<template>
  <div class="w-full">
    <div class="overflow-hidden w-full mb-xl" ref="carrouselContainer">
      <div ref="carrouselInner" class="flex flex-row transition-transform duration-700 ease-expo">
        <project-item v-for="(item, key) in items" :key="key" :item="item" />
      </div>
    </div>
    <project-list-navigation
      :length="items.length"
      :index="index"
      @index-changed="goToItem"
    />
  </div>
</template>


<script>
import { gsap } from "gsap/dist/gsap";

import ProjectItem from "./ProjectItem";
import ProjectListNavigation from './ProjectListNavigation'

export default {
  components: {
    "project-item": ProjectItem,
    'project-list-navigation': ProjectListNavigation
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      index: 0,
    };
  },
  methods: {
    goToItem(index) {
      if (index >= this.items.length) {
        this.index = 0;
      } else if (index < 0) {
        this.index = this.items.length - 1;
      } else this.index = index;
    },
    setCarrouselInnerWidth() {
      this.$refs["carrouselInner"].style.width =
        this.$refs["carrouselContainer"].offsetWidth * this.items.length + "px";
    },
    setCarrouselInnerTransform() {
      this.$refs["carrouselInner"].style.transform = `translateX(-${this.index *
        this.$refs["carrouselContainer"].offsetWidth}px)`;
    },
    setCarrouselInnerProperties() {
      this.setCarrouselInnerWidth();
      this.setCarrouselInnerTransform();
    }
  },
  watch: { index() { this.setCarrouselInnerTransform() } },
  created() { window.addEventListener("resize", this.setCarrouselInnerProperties) },
  destroyed() { window.removeEventListener("resize", this.setCarrouselInnerProperties) },
  mounted() { this.setCarrouselInnerWidth() }
};
</script>