<script setup>
  import {
    ref,
    onMounted
  } from "vue";
  import TodosService from "../services/todos-service";
  import Modal from "./Modal.vue";
  import GetUpdateTodo from "./GetUpdateTodo.vue";
  import CreateTodo from "./CreateTodo.vue";
  import LogoutButton from "./LogoutButton.vue";

  const todosService = new TodosService();
  const todo = ref(null);
  const todos = ref([]);
  const isCreateModalOpen = ref(false);

  const getTodos = async () => (todos.value = await todosService.getTodos());
  onMounted(getTodos);

  const onTodoClick = (t) => {
    todo.value = t;
  };

  const onModalClose = () => {
    todo.value = null;
  };

  const onToggleCreateModal = () => {
    isCreateModalOpen.value = !isCreateModalOpen.value;
  };
</script>

<template>
    <nav class="navbar navbar-light bg-light w-100">
      <button type="button" class="btn btn-success" @click="onToggleCreateModal">Create</button>
      <Modal :isOpen="isCreateModalOpen" :toggleModal="onToggleCreateModal">
        <CreateTodo />
      </Modal>
      <div>
        <LogoutButton />
      </div>
    </nav>

    <div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>

  <div class="list-group">
    <a @click="onTodoClick(todo)" v-for="todo in todos" class="todos todoListe list-group-item list-group-item-action">
      {{ todo.title }}
    </a>
  </div>

  <Modal :toggleModal="onModalClose" :isOpen="!!todo">
    <GetUpdateTodo :todoId=todo._id />
  </Modal>
</template>

<style scoped>
  .todoListe {
    cursor: pointer;
    color: brown;
    font-size: 18px;
  }

  .todoListe:hover {
    color: rgb(42, 126, 165);
  }
</style>