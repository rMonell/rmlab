<template>
  <div class="text-center m:mw-50 md:text-left mx-auto container">
    <magic-title
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
import { gsap } from "gsap/dist/gsap";

import MagicTitle from "~/components/global/MagicTitle.vue";

const client = createClient();

export default {
  head () {
    return { title: this.title }
  },
  
  components: {
    'magic-title': MagicTitle
  },

  computed: {
    title() {
      return this.$store.state.locale.staticTrans.about[this.$store.state.locale.value].title
    }
  },

  asyncComputed: {
    content() {
      return Promise.all([client.getEntries({ content_type: "about", locale: this.$store.state.locale.value })])
        .then(([entries]) => {
          const options = {
            renderNode: {
              [BLOCKS.PARAGRAPH]: (node, next) => `<p class="mb-lg last:mb-0">${next(node.content)}</p>`,
              [INLINES.HYPERLINK]: (node, next) => `<a class="text-blue-500 hover:text-blue-400" href="${node.data.uri}" target="_blank">${next(node.content)}</a>`
            }
          };

          return documentToHtmlString(entries.items[0].fields.body, options)
        })
        .catch(console.error);
    }
  },

  mounted() {
    const { para } = this.$refs;
    const timeline = gsap.timeline();
    const easing = 'Expo.easeInOut';

    timeline.fromTo(
      para,
      { x: 200, alpha: 0, ease: easing },
      { duration: 1.5, x: 0, alpha: 1, ease: easing, stagger: .25 }
    );
  }
};
</script>