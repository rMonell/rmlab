<template>
    <div v-if="item" class="w-full z-back">
      <div class="container p-lg md:p-xl mt-2xl">
        <div class="flex items-center mb-lg">
          <span class="text-base font-normal mr-sm">Retour</span>
        </div>
          <magic-title
              :value="item.name"
              tag="h1"
              className="text-3xl md:text-6xl leading-tight uppercase font-bold mb-xl"

              from="bottom"
              to="initialY"
          />
          <div
              class="w-full h-64 bg-cover bg-center bg-no-repeat mb-lg"
              :style="`background-image: url(${item.mainPicture.fields.file.url}); height: 30vw; min-height: 200px;`"
              ref="projectPicture"
          />
          <div class="mb-xl overflow-hidden">
            <div class="flex justify-between w-full" ref="projectInfos">
              <div class="flex">
                <div v-for="(role, key) in item.role" :key="key">
                  <span class="text-sm">{{ role.fields.name }}</span>
                  <span class="text-sm mx-sm" v-if="key != item.role.length - 1">/</span>
                </div>
              </div>
              <span class="text-sm">{{ item.year }}</span>
            </div>
          </div>
          <div v-html="item.body" ref="projectBody" />
        </div>
        <div class="bg-current p-lg md:p-xl flex flex-col md:flex-row">
          <div class="w-full mr-lg">
            <img
              class="w-full mb-lg last:mb-0"
              v-for="(image, key) in item.imagesGrid.slice(0, item.imagesGrid.length / 2)"
              :key="key"
              :src="image.fields.file.url"
              ref="projectGridColLeft"
            />
          </div>
          <div class="w-full mt-lg md:mt-2xl">
            <img
              class="w-full mb-lg last:mb-0"
              v-for="(image, key) in item.imagesGrid.slice(item.imagesGrid.length / 2, item.imagesGrid.length)"
              :key="key"
              :src="image.fields.file.url"
              ref="projectGridColRight"
            />
          </div>
        </div>
    </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { TimelineLite, Expo } from 'gsap'

import MagicTitle from '~/components/global/super/MagicTitle.vue'

const client = createClient();

export default {
  components: {
    'magic-title': MagicTitle
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
  mounted() {
    const timeline = new TimelineLite();
    const easing = Expo.easeInOut;

    console.log(this.$refs["projectPicture"])

    timeline.from(this.$refs.projectPicture, { width: 0, ease: easing })
  }
};
</script>