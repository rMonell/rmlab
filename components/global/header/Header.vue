<template>
    <header class="position-absolute-tl flex-row justify-between items-center w-100 p-l index-400 mix-difference">
        <Logo />
        <Burger />
    </header>
</template>

<script>
import Logo from '~/components/global/header/Logo.vue'
import Burger from '~/components/global/header/Burger.vue'

export default {
  components: {
    Logo, Burger
  },
}
</script>