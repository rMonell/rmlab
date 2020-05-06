<template>
    <div class="menu w-100 h-100-vh position-absolute-tl index-500">
        <ul>
            <li v-for="item in items" :key="item.path">
                <nuxt-link to="item.path">{{ item.value }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: {
        items: [
            {
                path: '/about',
                value: 'À propos'
            },
            {
                path: '/projects',
                value: 'Mes projets'
            },
            {
                path: '/contact',
                value: 'Me contacter'
            }
        ]
    }
}
</script>

<style>
    .menu {
        transform: translateY(-100%);
        background-color: currentColor;
        mix-blend-mode: difference;
        transition: transform .3s ease;
    }
</style>