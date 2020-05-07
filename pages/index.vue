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
        <div class="mt-m flex-column justify-end items-center cursor-pointer position-absolute-b pb-l">
            <MagicFill
                width="1px"
                className="mb-t"

                from="0px"
                to="60px"
                target="height"
                :duration=".75"
                :delay=".5"
            />
            
            <MagicTitle
                value="Scroll"
                tag="span"
                className="font-m"

                from="bottom"
                to="initialY"
                :delay=".15"
            />
        </div>
    </div>
</template>

<script>
import MagicTitle from '~/components/global/super/MagicTitle.vue'
import MagicFill from '~/components/global/super/MagicFill.vue'

export default {
    components: {
        MagicTitle, MagicFill
    },
}
</script>