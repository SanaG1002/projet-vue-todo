<script setup>
import { ref } from "vue";
import AuthService from "../services/auth-service";
import TodosService from "../services/todos-service";

const authService = new AuthService();
const todosService = new TodosService();
const title = ref("");
const content = ref("");
const done = ref(false);
const user = ref(authService.getUserId());
const doneAt = ref(new Date());
const createTodo = async () => {
  const todo = {
    title: title.value,
    content: content.value,
    done: done.value,
    user: user.value,
    doneAt: doneAt.value,
  };
  const newTodo = await todosService.createTodo(todo);
  console.log(newTodo);
};
</script>

<template>
  <div class="container-fluid">
    <form class="container w-100">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="title" placeholder="Title" />
      </div>
      <div class="form-control">
        <label for="content">Content</label>
        <input
          type="text"
          id="content"
          v-model="content"
          placeholder="Content"
        />
      </div>

      <button
        type="button"
        class="btn btn-primary mt-4 w-100"
        @click="createTodo"
      >
        Create Todo
      </button>
    </form>
  </div>
</template>