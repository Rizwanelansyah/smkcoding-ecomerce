<template>
    <div class="flex bg-black justify-between items-center h-16 px-12">
        <h1 class="ml-2 font-medium text-4xl text-white">SMK Coding</h1>
        <ul class="flex justify-around w-1/4">
            <li>
                <Button>
                    <NuxtLink to="/">Home</NuxtLink>
                </Button>
            </li>
            <li>
                <Button>
                    <NuxtLink to="/products">Products</NuxtLink>
                </Button>
            </li>
            <li>
                <Button>
                    <NuxtLink to="/cart">Cart</NuxtLink>
                </Button>
            </li>
        </ul>
    </div>
</template>