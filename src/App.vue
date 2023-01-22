<script setup>
import { onMounted } from "vue";
import { RouterView, useRouter } from "vue-router";
import AuthService from "./services/auth-service";

const authService = new AuthService();
const router = useRouter();

const tryAuth = async () => {
  const user = await authService.authenticate();
  if (!user) {
    router.push({ name: "login" });
  } else {
    router.push({ name: "home" });
  }
};
onMounted(tryAuth);
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
