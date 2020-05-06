<template>
    <div class="flex-column items-center index-10">
        <div class="align-center">
            <h1 class="font-hero-700 uppercase">Renaud Monell</h1>
            <h2 class="font-l-400">Développeur front-end</h2>
        </div>
        <div class="scroll-container mt-m flex-column justify-end items-center cursor-pointer position-absolute-b pb-l">
            <span class="fill mb-t" />
            <span class="font-m">Scroll</span>
        </div>
    </div>
</template>

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