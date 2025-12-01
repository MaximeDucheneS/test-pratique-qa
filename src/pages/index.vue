<template>
  <v-container class="todo-list-container">
    <h1 class="text-center">Todos</h1>
    <div v-for="todo in todoList" :key="todo.id">
      <Todo :todo="todo" />
    </div>

    <v-fab
      :app="true"
      color="primary"
      data-cy="btn-add-todo"
      icon
      :location="'right bottom'"
      size="large"
      @click="addTodo"
    >
      <v-icon>mdi-plus</v-icon>
    </v-fab>
  </v-container>
</template>

<script setup>
  import Todo from '@/components/Todo.vue'
  import { useAppStore } from '@/stores/app.js'

  const { todoList, addTodo } = useAppStore()
</script>

<style lang="scss" scoped>
.todo-list-container {
  max-width: 600px;
}
</style>
