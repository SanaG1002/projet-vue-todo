<script setup>
import { ref, onMounted } from "vue";
import AuthService from "../services/auth-service";
import Todo from "../services/todo";
import TodosService from "../services/todos-service";

const props = defineProps({
    todoId: String,
})

const authService = new AuthService();
const todo = ref(null);
const title = ref("");
const content = ref("");
const timeLimit = ref(null);
const doneAt = ref(null);

const getTodo = async () => {
    todo.value = await TodosService.getTodo(props.todoId)
    title.value = todo.value.title;
    content.value = todo.value.content;
    timeLimit.value = todo.value.timeLimit;
    doneAt.value = todo.value.doneAt;
};
onMounted(getTodo);

const updateTodo = async () => {
  timeLimit.value = (timeLimit.value == '' ? null : timeLimit.value);
  doneAt.value = (doneAt.value == '' ? null : doneAt.value);

  const todo = Todo.Builder
    .withDone((doneAt.value != null))
    .withUser(authService.getUserId())
    .withDoneAt(doneAt.value)
    .build(
      title.value,
      content.value,
      timeLimit.value
    );

  const updateTodo = await TodosService.updateTodo(todo);
  alert(
     todo.title + ' (id: ' + props.todoId + ')" updating success.' + 
    'Refresh the page'
  );
};

const deleteTodo = async () => {
    const deleteTodo = await TodosService.deleteTodo(props.todoId);
    alert(
       deleteTodo.title + ' (id: ' + deleteTodo._id + ')" deletion success.' + 
        'Refresh the page'
    );
};
</script>

<template>
    <div v-if="todo" class="container-fluid">
        <h2>{{ todo.title }}</h2> 

        <h3>Info</h3> 
        <table> 
            <tr><td>Id: </td><td>{{ todo._id }}</td></tr>
            <tr><td>Creation: </td><td>{{ todo.createdAt }}</td></tr>
            <tr><td>Mise a jour: </td><td>{{ todo.updatedAt }}</td></tr>
        </table>  

        <h3>Updating</h3> 
        <form class="container w-100">
            <div class="form-control todoFormControl">
                <label for="title" class="form-label">Title</label>
                <input type="text" class="form-control" id="title" v-model="title" placeholder="Title" />
            </div>

            <div class="form-control todoFormControl">
                <label for="timeLimit" class="form-label">Time limit</label>
                <input type="text" class="form-control" id="timeLimit" v-model="timeLimit" placeholder="2022-12-27T17:17:00.000Z" />
            </div>

            <div class="form-control todoFormControl">
                <label for="doneAt" class="form-label">Done at</label>
                <input type="text" class="form-control" id="doneAt" v-model="doneAt" placeholder="2022-12-28T20:34:06.241Z" />
            </div>

            <div class="form-control todoFormControl">
                <label for="content" class="form-label">Content</label>
                <textarea id="content" class="form-control" v-model="content" placeholder="Content">
                </textarea>
            </div>
      

        <button type="button" class="btn btn-primary mt-4" @click="updateTodo">
            Update
        </button>

        <button type="button" class="btn btn-danger mt-4" @click="deleteTodo">
            Delete
        </button>
    </form>
    </div>
</template>


<style scoped>
.todoFormControl {
 border: none;
}

</style>
