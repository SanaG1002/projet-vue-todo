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

  const todo = ref(null);
  const todos = ref([]);
  const isCreateModalOpen = ref(false);

  const getTodos = async () => (todos.value = await TodosService.getTodos());
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
    <h4>Filter</h4>
    <button type="button" class="btn btn-warning m-2" >Exceeded</button>
    <button type="button" class="btn btn-warning m-2" >No limit</button>
    <button type="button" class="btn btn-warning m-2" >Still on time</button>
    <button type="button" class="btn btn-warning m-2" >Completed on time</button>
    <button type="button" class="btn btn-warning m-2">Completed out of time</button>
    
  </div>
</div>

  <div class="list-group">
    <a @click="onTodoClick(todo)" v-for="todo in todos" class="todos todoListe list-group-item list-group-item-action">
      {{ todo.title }}
    </a>
  </div>

  <Modal :toggleModal="onModalClose" :isOpen="!!todo">
    <GetUpdateTodo :todoId=todo.id />
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