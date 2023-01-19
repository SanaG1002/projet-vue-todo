<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import AuthService from "../services/auth-service";

const authService = new AuthService();
const email = ref("");
const password = ref("");
const passwordRetype = ref("");
const router = useRouter();

const register = async () => {
  if (password.value !== passwordRetype.value) return;
  const user = await authService.register(email.value, password.value);
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
      <div class="form-group">
        <label for="password-retype">Retype Password</label>
        <input
          type="password"
          class="form-control"
          id="password-retype"
          placeholder="Password"
          v-model="passwordRetype"
        />
      </div>
      <button
        @click="register"
        type="button"
        class="btn btn-primary mt-4 w-100"
      >
        Register
      </button>
    </form>
  </div>
</template>