<template>
    <div class="flex-column items-center index-10">
        <div class="align-center">
            <MagicTitle
                value="Renaud Monell"
                tag="h1"
                className="font-hero-700 uppercase"

                from="bottom"
                to="initialY"
            />
            <MagicTitle
                value="Développeur front-end"
                tag="h2"
                className="font-l-400"

                from="bottom"
                to="initialY"
                :delay=".15"
            />
        </div>
        <div class="scroll-container mt-m flex-column justify-end items-center cursor-pointer position-absolute-b pb-l">
            <span class="fill mb-t" />
            <span class="font-m">Scroll</span>
        </div>
    </div>
</template>

<script>
import MagicTitle from '~/components/global/super/MagicTitle.vue'

export default {
    components: {
        MagicTitle
    },
}
</script>

<style>
    .fill {
        display: block;
        height: 60px;
        width: 1px;
        background-color: currentColor;
        transition: height .3s ease;
    }
    
    .scroll-container:hover .fill { height: 40px }
</style>