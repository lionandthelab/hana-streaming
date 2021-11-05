<template>
  <div>
    <q-card class="my-card">
      <q-card-section>
        <img width="1280" height="720" :src="stream.thumbnailUrl" />
        <q-card-actions vertical align="center">
          <q-icon
            name="live_tv"
            class="text-primary"
            style="font-size: 2em"
            @click="playing = !playing"
          ></q-icon>
        </q-card-actions>
        <q-card-section>
          <div class="text-h6">{{ stream.title }}</div>
          <div class="text-subtitle2">{{ stream.tags }}</div>
          {{ stream.date.getFullYear() }}년 {{ stream.date.getMonth() }}월
          {{ stream.date.getDate() }}일
        </q-card-section>
      </q-card-section>
    </q-card>
    <q-dialog v-model="playing">
      <q-card style="margin:0, padding:0, width: 1530px; max-width: 80vw;">
        <q-card-section justify="center" align="center" horizontal>
          <q-card-section justify="center" align="center"  class="q-pa-none q-ma-none">
          <iframe
            width="1280px"
            height="720px"
            :src="stream.url"
            frameborder="0"
            allowfullscreen
            style="display:block"
          />
          </q-card-section>
          <q-card-section class="q-pa-small q-ma-small">
            <q-card-actions vertical align="center" >
              <q-btn flat round color="red" icon="favorite"></q-btn>
              <q-btn flat round color="accent" icon="bookmark"></q-btn>
              <q-btn flat round color="primary" icon="share"></q-btn>
            </q-card-actions>
          </q-card-section>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, toRef, PropType } from 'vue'
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

// const key = 'AIzaSyCBCYl6HiYvSDj2vXQCRjWI3Ju_IxsJwWs'

function streamInfo (stream: Ref<Stream>) {
  return { stream }
}

export default defineComponent({
  name: 'Stream',
  props: {
    stream: {
      type: Object as PropType<Stream>,
      default: () => null
    }
  },

  setup (props) {
    const playing = ref(false)

    // return { ...useClickCount(), ...useDisplayTodo(toRef(props, 'streams')) }
    return { ...streamInfo(toRef(props, 'stream')), playing }
  }
})
</script>
