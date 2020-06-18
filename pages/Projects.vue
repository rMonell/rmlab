<template>
  <div class="flex flex-col items-center z-10 w-full">
    <div class="align-center container">
      <MagicTitle
        :value="title"
        tag="h1"
        class="text-4xl font-bold uppercase mb-xl"
        from="bottom"
        to="initialY"
      />
      <ProjectList :items="items" />
    </div>
  </div>
</template>

<script>
import MagicTitle from "~/components/global/super/MagicTitle.vue";
import ProjectList from "~/components/projectList/ProjectList.vue";
import { createClient } from "~/plugins/contentful.js";

const client = createClient();

export default {
  components: {
    MagicTitle,
    ProjectList
  },

  asyncData({ env }) {
    return Promise.all([client.getEntries({ content_type: "project" })])
      .then(([entries]) => {
        return {
          items: entries.items
        };
      })
      .catch(console.error);
  },
  computed: {
    title() {
      return this.$store.state.locale.staticTrans.projects[
        this.$store.state.locale.value
      ].title;
    }
  }
};
</script>