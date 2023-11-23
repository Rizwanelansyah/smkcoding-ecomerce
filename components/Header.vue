<script lang="ts" setup>
import { useAuthStore } from "~/stores/auth";
const authStore = useAuthStore();
const isAuthenticated = ref();
const router = useRouter();

isAuthenticated.value = useCookie("access_token").value;

const logout = async () => {
  await authStore.logout();
  const accessToken = useCookie("access_token");
  const refreshToken = useCookie("refresh_token");
  accessToken.value = null;
  refreshToken.value = null;
  setTimeout(() => {
    isAuthenticated.value = useCookie("access_token").value;
  }, 100);
  router.push({
    path: "/",
  });
};
</script>
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
      <li>
        <Button v-if="!isAuthenticated">
          <NuxtLink to="/login" class="bg-red-600">Login</NuxtLink>
        </Button>
        <div v-else class="text-base cursor-pointer bg-red-600 px-6 py-2 text-white rounded-lg hover:bg-red-600/80" @click="logout">Logout</div>
      </li>
    </ul>
  </div>
</template>