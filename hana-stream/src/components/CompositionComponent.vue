<template>
  <div>
    <p>{{ title }}</p>
    <q-video
      :ratio="16 / 9"
      src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
    ></q-video>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Stream } from './models'

// function useClickCount () {
//   const clickCount = ref(0)
//   function increment () {
//     clickCount.value += 1
//     return clickCount.value
//   }

//   return { clickCount, increment }
// }

// function useDisplayTodo (todos: Ref<Todo[]>) {
//   const todoCount = computed(() => todos.value.length)
//   return { todoCount }
// }

export default defineComponent({
  name: 'CompositionComponent',
  props: {
    streams: {
      type: Array as PropType<Stream[]>,
      default: () => []
    },
    title: {
      type: String
    }
  },
  setup () {
    // return { ...useClickCount(), ...useDisplayTodo(toRef(props, 'streams')) }
    return {}
  }
})
</script>
