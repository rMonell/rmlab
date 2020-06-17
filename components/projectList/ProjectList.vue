<template>
  <div class="container">
    <div class="overflow-hidden w-full mb-xl" ref="carrouselContainer">
      <div ref="carrouselInner" class="flex flex-row transition-transform duration-700 ease-expo">
        <project-item v-for="(item, key) in items" :key="key" :item="item" class="px-5" />
      </div>
    </div>
    <div class="flex flex-row justify-between">
      <project-list-navigation action="prev" :index="index" @index-change="goToItem" />
      <div class="flex flex-row items-center text-sm">
        <span>{{ index + 1 }}</span>
        <span class="mx-sm">/</span>
        <span>{{ items.length }}</span>
      </div>
      <project-list-navigation action="next" :index="index" @index-change="goToItem" />
    </div>
  </div>
</template>


<script>
import ProjectItem from "./ProjectItem";
import ProjectListNavigation from "./ProjectListNavigation";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  components: {
    "project-item": ProjectItem,
    "project-list-navigation": ProjectListNavigation
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
      console.log(this.$refs["carrouselContainer"].offsetWidth)
      
      this.$refs["carrouselInner"].style.width =
        this.$refs["carrouselContainer"].offsetWidth * this.items.length + "px";
    }
  },
  watch: {
    index() {
      this.$refs["carrouselInner"].style.transform = `translateX(-${this.index * this.$refs["carrouselContainer"].offsetWidth}px)`
    }
  },
  created() {
    window.addEventListener('resize', this.setCarrouselInnerWidth);
  },
  destroyed() {
    window.removeEventListener('resize', this.setCarrouselInnerWidth);
  },
  mounted() {
    this.setCarrouselInnerWidth();
  }
};
</script>