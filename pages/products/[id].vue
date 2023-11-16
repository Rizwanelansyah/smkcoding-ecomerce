<script lang="ts" setup>
import { useProductsStore } from "~/stores/products";
import { type FormField } from "~/types/products";

const productStore = useProductsStore();
const allProducts = ref([]);

productStore.getAllProducts().then(() => {
allProducts.value = productStore.products;
});
const route = useRoute();
const id = typeof route.params.id === "string" ? parseInt(route.params.id) : null;
const product = ref(productStore.products.find((item: FormField) => item.id === String(id)));
</script>
<template>
  <DetailProduct :product="product" />
</template>