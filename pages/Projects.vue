<template>
    <div class="flex-column items-center index-10">
        <div class="align-left">
            <MagicTitle
                value="Mes projets"
                tag="h1"
                className="font-xl weight-700 uppercase"

                from="bottom"
                to="initialY"
            />
            <ProjectList />
        </div>
    </div>
</template>

<script>
import MagicTitle from '~/components/global/super/MagicTitle.vue'
import ProjectList from '~/components/projectList/ProjectList.vue'

export default {
    components: {
        MagicTitle, ProjectList
    },
}
</script>