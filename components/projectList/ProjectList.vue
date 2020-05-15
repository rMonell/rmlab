<template>
    <div class="overflow-hidden w-100">
        <div class="project-list grid-m w-100" ref="projectList">
            <div v-for="item in items" :key="items.indexOf(item)" class="project-list--item col-12 m:col-3" ref="projectItem">
                <article class="position-relative index-0 w-100 h-100 p-m flex-column justify-end items-start">
                    <h1 class="font-l weight-700 uppercase item-title">{{ item.name }}</h1>
                    <div class="mbox-bm flex-column justify-center items-start overflow-hidden item-content">
                        <div class="align-left">
                            <h2 class="font-m weight-700">Description</h2>
                            <p class="font-m">{{ item.short_desc }}</p>
                        </div>
                        <div class="align-left">
                            <h2 class="font-m weight-700">Rôle</h2>
                            <h3 class="font-m weight-400">{{ item.role }}</h3>
                        </div>
                        <div class="align-left">
                            <h2 class="font-m weight-700">Environnement</h2>
                            <h3 class="font-m weight-400">{{ item.environnement }}</h3>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
import { TimelineLite, Expo } from 'gsap'

export default {
    data() {
        return {
            timeline: new TimelineLite(),

            items: [
                {
                    name: 'Spotlight',
                    short_desc: 'Application dans le rôle d\'un projet de fin d\'étude',
                    role: 'Développeur Full Stack / Designer UI',
                    environnement: 'ReactJS / NodeJS / Adobe XD',
                    preview: ''
                },
                {
                    name: 'Innée',
                    short_desc: 'Site de vente de pret à porté',
                    role: 'Intégrateur / Designer UI',
                    environnement: 'SASS / Adobe XD',
                    preview: ''
                },
            ]
        }
    },

    mounted() {
        const { projectList, projectItem } = this.$refs
        const easing = Expo.easeInOut

        this.timeline.fromTo(projectList, 1, { x: '100%',  ease: easing }, { x: '0%',  ease: easing })

        this.timeline.staggerFromTo(
            projectItem,
            .75,
            {y: -50, alpha: 0, ease: easing},
            {y: 0, alpha: 1, ease: easing},
            .1,
            '-=1'
        )
    }
}
</script>

<style lang="scss" scoped>
    .project-list {
        height: 250px;

        &--item {
            &:hover {
                & > article {
                    &:before { opacity: .5 }

                    .item-title {
                        max-height: 0;
                        opacity: 0;
                    }

                    .item-content {
                        opacity: 1;
                        max-height: calc(250px - 40px);
                        height: 100%;
                    }
                }
            }

            & > article {
                background-color: tomato;

                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #000;
                    opacity: 0;
                    z-index: -1;
                    transition: opacity .3s ease;
                }

                .item-title { max-height: 24px }

                .item-title, .item-content { transition: all .3s ease }

                .item-content {
                    max-height: 0;
                    opacity: 0;
                }
            }
        }
    }
</style>