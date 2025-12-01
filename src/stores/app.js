// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    todoList: [{
      id: 1,
      text: 'Learn Cypress',
      completed: true,
    }, {
      id: 2,
      text: 'Complete the technical assessment',
      completed: false,
    }],
    nextTodoId: 3,
  }),
  actions: {
    addTodo () {
      const newTodo = {
        id: this.nextTodoId++,
        text: 'Do something...',
        completed: false,
      }
      this.todoList.push(newTodo)
    },
  },
})
