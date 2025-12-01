<template>
  <v-card :key="todoRef.id" class="my-5 todo-card d-flex align-center">
    <div class="id-zone flex-1">
      {{ todoRef.id }}
    </div>
    <div v-if="!editMode" class="text-zone flex-grow-1 text-pre-wrap" @click="onClickText">
      {{ todoRef.text }}
    </div>
    <div v-if="editMode" class="flex-grow-1">
      <v-textarea
        ref="todoTextarea"
        v-model="todoRef.text"
        :auto-grow="true"
        rows="3"
        @focusout="onFocusOutText"
      />
    </div>
    <div class="flex-1">
      <v-checkbox v-model="todoRef.completed" :hide-details="true" />
    </div>
  </v-card>
</template>
<script setup lang="ts">
  import { useTemplateRef } from 'vue'

  const { todo } = defineProps({
    todo: Object,
  })

  const todoTextarea = useTemplateRef('todoTextarea')

  const todoRef = ref(null)

  watch(() => todo, () => {
    todoRef.value = todo
  }, { immediate: true })

  const editMode = ref(false)

  function onClickText () {
    editMode.value = true
    setTimeout(() => {
      todoTextarea.value.focus()
    })
  }

  function onFocusOutText () {
    editMode.value = false
    todoRef.value.text = todoRef.value.text.trim()
  }
</script>

<style lang="scss" scoped>
.todo-card {
  padding-top: 16px;
  padding-bottom: 16px;
}

.id-zone {
  width: 60px;
  text-align: center;
}

.text-zone {
  cursor: pointer;
}
</style>
