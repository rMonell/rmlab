<template>
  <article class="flex justify-center md:items-stretch relative">
    <div class="flex flex-col justify-center items-start w-2/5">
      <div>
        <h1 class="text-5xl font-bold uppercase mb-md">{{ item.fields.name }}</h1>
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
      <div class="mb-lg" v-html="getProjectPreview(item.fields.body)" />
      <app-button>En savoir plus</app-button>
    </div>
    <div class="absolute pin-c flex items-center h-auto w-3/5 opacity-50">
      <div
        class="h-64 bg-cover bg-center bg-no-repeat w-full"
        :style="`background-image: url(${item.fields.mainPicture.fields.file.url})`"
      />
    </div>
  </article>
</template>


<script>
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
  methods: {
    getProjectPreview(field) {
      return documentToHtmlString(field).length > 150
        ? documentToHtmlString(field).substring(0, 150) + "..."
        : documentToHtmlString(field).substring(0, 150);
    }
  }
};
</script>