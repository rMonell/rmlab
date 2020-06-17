<template>
  <div class="text-center m:mw-50 md:text-left mx-auto container">
    <MagicTitle
      :value="title"
      tag="h1"
      class="text-4xl font-bold uppercase mb-xl"
      from="bottom"
      to="initialY"
    />
    <div class="text-lg" ref="para" v-html="content" />
  </div>
</template>

<script>
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { createClient } from "~/plugins/contentful.js";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import { TimelineLite, Expo } from "gsap";
import MagicTitle from "~/components/global/super/MagicTitle.vue";

const client = createClient();

export default {
  components: {
    MagicTitle
  },

  asyncData({ env }) {
    return Promise.all([client.getEntries({ content_type: "about" })])
      .then(([entries]) => {
        const options = {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, next) => `<p class="mb-lg last:mb-0">${next(node.content)}</p>`,
            [INLINES.HYPERLINK]: (node, next) => `<a class="text-blue-500 hover:text-blue-400" href="${node.data.uri}" target="_blank">${next(node.content)}</a>`
          }
        };

        return {
          title: entries.items[0].fields.title,
          content: documentToHtmlString(entries.items[0].fields.body, options)
        };
      })
      .catch(console.error);
  },

  mounted() {
    const { para } = this.$refs;
    const timeline = new TimelineLite();
    const easing = Expo.easeInOut;

    timeline.staggerFromTo(
      para,
      1.5,
      { x: 200, alpha: 0, ease: easing },
      { x: 0, alpha: 1, ease: easing },
      0.25
    );
  }
};
</script>