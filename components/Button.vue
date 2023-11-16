<template>
    <div class="my-transition flex justify-center bg-stone-950 p-2 rounded cursor-pointer text-white hover:bg-stone-900 transition-all duration-1000">
        <slot />
    </div>
</template>
<style>
    div.my-transition:hover{
        transition: all 400ms ease-in-out;
        transform: scale(200%, 200%) translateY(10%);
    }
</style>