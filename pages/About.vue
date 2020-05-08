<template>
    <div class="mw-50 mh-auto">
        <MagicTitle
            value="À propos"
            tag="h1"
            className="font-xl-700 uppercase mb-l"

            from="bottom"
            to="initialY"
        />
        <div class="font-l-400 mbox-bm">
            <p>Etiam vitae tortor. Nullam accumsan lorem in dui. Proin faucibus arcu quis ante. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <p>Etiam vitae tortor. Nullam accumsan lorem in dui. Proin faucibus arcu quis ante. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
    </div>
</template>

<script>
import MagicTitle from '~/components/global/super/MagicTitle.vue'
import MagicFill from '~/components/global/super/MagicFill.vue'

export default {
    components: {
        MagicTitle
    },
}
</script>