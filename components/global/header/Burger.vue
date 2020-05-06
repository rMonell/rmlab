<template>
    <div class="burger">
        <span class="slice"/>
    </div>
</template>

<style>
    .burger {
        position: relative;
        width: 50px;
        height: 50px;
        background-color: currentColor;
    }

    .burger.active > span { background-color: transparent }
    .burger.active > span:before { transform: translateY(0) rotate(-45deg) }
    .burger.active > span:after { transform: translateY(0) rotate(45deg) }

    .burger > span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .burger > span, .burger > span:before, .burger > span:after {
        display: block;
        width: 22px;
        height: 2px;
        background-color: currentColor;
        mix-blend-mode: difference;
        transition: all .3s ease;
    }

    .burger > span:before, .burger > span:after {
        content: '';

        position: absolute;
        top: 0;
        left: 0;

        display: block;
        transform-origin: center;
    }

    .burger > span:before { transform: translateY(-7px) }
    .burger > span:after { transform: translateY(7px) }

</style>