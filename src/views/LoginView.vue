<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import AuthService from "../services/auth-service";

const authService = new AuthService();

const email = ref("");
const password = ref("");
const router = useRouter();

const login = async () => {
  const user = await authService.login(email.value, password.value);
  if (user.success) {
    router.push({ name: "home" });
  }
};
</script>

<template>
  <div class="container-fluid">
    <form class="container">
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter email"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          v-model="password"
        />
      </div>

      <button @click="login" type="button" class="btn btn-primary mt-4 w-100">
        Login
      </button>
    </form>
  </div>
</template>