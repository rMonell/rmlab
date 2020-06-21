<template>
  <div class="container w-full align-center">
    <magic-title
      :value="title"
      tag="h1"
      class="text-4xl font-bold uppercase mb-xl md:text-left text-center"
      from="bottom"
      to="initialY"
    />
    <project-list v-if="items" :items="items" />
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";

import MagicTitle from "~/components/global/super/MagicTitle.vue";
import ProjectList from "~/components/projectList/ProjectList.vue";

const client = createClient();

export default {
  components: {
    'magic-title': MagicTitle,
    'project-list': ProjectList
  },
  computed: {
    title() {
      return this.$store.state.locale.staticTrans.projects[
        this.$store.state.locale.value
      ].title;
    }
  },
  asyncComputed: {
    items() {
      return Promise.all([client.getEntries({ content_type: "project", locale: this.$store.state.locale.value })])
        .then(([entries]) => entries.items)
        .catch(console.error);
    }
  },
};
</script>