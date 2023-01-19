<script setup>
import { ref, onMounted, onUpdated } from "vue";
import TodosService from "../services/todos-service";
import Modal from "./Modal.vue";
import NewTodo from "./NewTodo.vue";
import UpdateTodo from "./UpdateTodo.vue";

const todosService = new TodosService();
const todo = ref(null);
const todos = ref([]);
const isCreateModalOpen = ref(false);
const isUpdateModalOpen = ref(false);

const getTodos = async () => (todos.value = await todosService.getTodos());

const onTodoClick = (t) => {
  todo.value = t;
};
const onModalClose = () => {
  todo.value = null;
};
const onToggleCreateModal = () => {
  isCreateModalOpen.value = !isCreateModalOpen.value;
};

const onToggleUpdateModal = () => {
  isUpdateModalOpen.value = !isUpdateModalOpen.value;
};

onMounted(getTodos);
</script>

<template>
  <pre>{{ todos }}</pre>
  <div @click="onTodoClick(todo)" v-for="todo in todos" class="todos">
    {{ todo.title }}
  </div>
  <Modal :toggleModal="onModalClose" :isOpen="!!todo">
    {{ todo.title }}
  </Modal>

  <button type="button" class="btn btn-warning" @click="onToggleCreateModal">Create</button>
  <Modal :isOpen="isCreateModalOpen" :toggleModal="onToggleCreateModal">
    <NewTodo />
  </Modal>

  <button class="btn btn-secondary" @click="onToggleUpdateModal">Update</button>
    <Modal :isOpen="isUpdateModalOpen" :toggleModal="onToggleUpdateModal">
        <UpdateTodo />
    </Modal>
  
</template>