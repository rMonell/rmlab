<template>
    <header class="fixed top-0 left-0 flex flex-row justify-between items-center w-full p-lg md:p-xl z-40 mix-difference pointer-events-none">
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