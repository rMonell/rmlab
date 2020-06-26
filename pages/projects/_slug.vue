<template>
    <div v-if="item" class="w-full z-back">
      <div class="container p-lg md:p-xl mt-2xl">
          <div  class="flex mb-lg">
            <net-button
              :text="goBack"
              to="/projects"
              pattern="n-t"
            />
          </div>
          <magic-title
              :value="item.name"
              tag="h1"
              className="text-3xl md:text-6xl leading-tight uppercase font-bold mb-lg"

              from="bottom"
              to="initialY"
          />
          <div class="mb-xl overflow-hidden">
            <div class="flex justify-between w-full" ref="projectInfos">
              <div>
                <h2 class="text-sm font-bold uppercase">{{ role }}</h2>
                <div class="flex">
                  <div v-for="(role, key) in item.role" :key="key">
                    <span class="text-sm">{{ role.fields.name }}</span>
                    <span class="text-sm mx-sm" v-if="key != item.role.length - 1">/</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 class="text-sm font-bold uppercase">{{ year }}</h2>
                <span class="text-sm">{{ item.year }}</span>
              </div>
            </div>
          </div>
          <div
              class="w-full h-64 bg-gray-700 bg-cover bg-center bg-no-repeat mb-xl"
              :style="`background-image: url(${item.mainPicture.fields.file.url}); height: 30vw; min-height: 200px;`"
              ref="projectPicture"
          />
          <div v-html="item.body" ref="projectBody" />
        </div>
        <div class="bg-current p-lg md:p-xl flex flex-col md:flex-row" ref="imagesGrid">
          <div class="w-full mr-lg">
            <img
              class="w-full mb-lg last:mb-0 bg-gray-700 shadow-md"
              v-for="(image, key) in item.imagesGrid.slice(0, item.imagesGrid.length / 2)"
              :key="key"
              :src="image.fields.file.url"
              ref="gridItemLeft"
            />
          </div>
          <div class="w-full mt-lg md:mt-2xl">
            <img
              class="w-full mb-lg last:mb-0 bg-gray-700 shadow-md"
              v-for="(image, key) in item.imagesGrid.slice(item.imagesGrid.length / 2, item.imagesGrid.length)"
              :key="key"
              :src="image.fields.file.url"
              ref="gridItemRight"
            />
          </div>
        </div>
    </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { gsap } from "gsap/dist/gsap";

import MagicTitle from '~/components/global/MagicTitle.vue'
import NetButton from "~/components/global/NetButton";

const client = createClient();

export default {
  head () {
    return { title: this.item && this.item.name }
  },
  components: {
    'magic-title': MagicTitle,
    'net-button': NetButton
  },
  asyncComputed: {
    item() {
      return Promise.all([
        client.getEntries({
          content_type: "project",
          locale: this.$store.state.locale.value,
          'fields.slug': this.$route.params.slug
        })
      ])
        .then(([entries]) => {
          const options = {
            renderNode: {
              [BLOCKS.PARAGRAPH]: (node, next) => `<p class="mb-lg last:mb-0">${next(node.content)}</p>`,
              [INLINES.HYPERLINK]: (node, next) => `<a class="text-blue-500 hover:text-blue-400" href="${node.data.uri}" target="_blank">${next(node.content)}</a>`
            }
          };

          entries.items[0].fields.body = documentToHtmlString(entries.items[0].fields.body, options)

          return entries.items[0].fields
        })
        .catch(console.error);
    }
  },
  computed: {
    goBack() {
      return this.$store.state.locale.staticTrans.global[this.$store.state.locale.value].goBack
    },
    role() {
      return this.$store.state.locale.staticTrans.projects[this.$store.state.locale.value].role
    },
    year() {
      return this.$store.state.locale.staticTrans.projects[this.$store.state.locale.value].year
    }
  },
  watch: {
    item() {
      const timeline = gsap.timeline();
      const easing = 'Expo.easeInOut';

      this.$nextTick(() => {
        timeline.fromTo(this.$refs['projectPicture'], { width: '0%' }, { duration: 1.5, width: '100%', ease: easing })
        timeline.from(this.$refs['projectInfos'], { duration: 1.5, y: '100%', ease: easing }, '-=1.25')
        timeline.from(this.$refs['projectBody'], { duration: 1.5, x: 100, alpha: 0, ease: easing }, '-=1.15')
      });
    },
  }
};
</script>