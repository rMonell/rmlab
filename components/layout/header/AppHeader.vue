<template>
    <header class="fixed top-0 left-0 flex flex-row justify-between items-center w-full p-lg md:p-xl z-40 mix-difference pointer-events-none">
        <logo />
        <burger />
    </header>
</template>

<script>
import Logo from './Logo'
import Burger from './Burger'

export default {
  components: {
    'logo': Logo,
    'burger': Burger
  },
}
</script>