<script setup>
import { ref } from "vue";
import AuthService from "../services/auth-service";
import TodosService from "../services/todos-service";

const authService = new AuthService();
const title = ref("");
const content = ref("");
const timeLimit = ref(null);
const doneAt = ref(null);

const createTodo = async () => {
  timeLimit.value = (timeLimit.value == '' ? null : timeLimit.value);
  doneAt.value = (doneAt.value == '' ? null : doneAt.value);

  const todo = {
    title: title.value,
    content: content.value,
    done: (doneAt.value != null),
    user: authService.getUserId(),
    timeLimit: timeLimit.value,
    doneAt: doneAt.value,
  };

  const createTodo = await TodosService.createTodo(todo);
  alert(
    createTodo.title + ' (id: ' + createTodo._id + ')" creation success.' + 
    'Refresh the page'
  );
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
        <label for="timeLimit">Time limit</label>
        <input type="text" id="timeLimit" v-model="timeLimit" placeholder="2022-12-27T17:17:00.000Z" />
      </div>

      <div class="form-control">
        <label for="doneAt">Done at</label>
        <input type="text" id="doneAt" v-model="doneAt" placeholder="2022-12-28T20:34:06.241Z" />
      </div>

      <div class="form-control">
        <label for="content">Content</label>
        <textarea id="content" v-model="content" placeholder="Content">
        </textarea>
      </div>

      <button
        type="button"
        class="btn btn-primary mt-4 w-100"
        @click="createTodo"
      >
        Create
      </button>
    </form>
  </div>
</template>