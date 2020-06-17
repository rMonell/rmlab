<template>
    <div class="flex flex-col items-center z-10 w-full">
        <div class="align-center w-100">
            <MagicTitle
                value="Mes projets"
                tag="h1"
                className="text-4xl font-bold uppercase mb-xl"

                from="bottom"
                to="initialY"
            />
            <ProjectList :items="items" />
        </div>
    </div>
</template>

<script>
import MagicTitle from '~/components/global/super/MagicTitle.vue'
import ProjectList from '~/components/projectList/ProjectList.vue'
import { createClient } from "~/plugins/contentful.js";

const client = createClient();

export default {
    components: {
        MagicTitle, ProjectList
    },

    asyncData({ env }) {
        return Promise.all([client.getEntries({ content_type: "project" })])
        .then(([entries]) => {
            return {
                items: entries.items
            }
        })
        .catch(console.error);
    },
}
</script>