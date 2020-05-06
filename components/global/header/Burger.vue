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
        border: 2px solid;
        cursor: pointer;
    }

    .burger:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: currentColor;
        mix-blend-mode: hard-light;
        transform-origin: bottom;
        transition: transform .3s ease;
        transform: scale3d(1, 0, 1);
    }

    .burger:hover:before {
        transform-origin: top;
        transform: scale3d(1, 1, 1);
    }

    .burger:not(.active):hover > span:before { transform: translateY(-5px) }
    .burger:not(.active):hover > span:after { transform: translateY(5px) }

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