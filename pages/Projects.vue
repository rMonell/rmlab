<template>
    <div class="flex-column items-center index-10 w-100">
        <div class="align-center w-100">
            <MagicTitle
                value="Mes projets"
                tag="h1"
                className="font-xl weight-700 uppercase mb-l"

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