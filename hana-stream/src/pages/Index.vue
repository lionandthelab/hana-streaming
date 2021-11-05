<template>
  <q-page class="row items-center justify-evenly">
    <stream-component
      :stream="todayStreams[0]"
    ></stream-component>
  </q-page>
</template>

<script lang="ts">
import { Stream } from 'components/models'
import StreamComponent from 'components/Stream.vue'
import { defineComponent } from 'vue'
import { db } from '../components/data'

function compareDate (x: Date, y: Date) {
  return x.getFullYear() === y.getFullYear() && x.getMonth() === y.getMonth() && x.getDate() === y.getDate()
}

function getTodayStreams () {
  console.log('db: ', db)
  const todayDate: Date = new Date()
  const todayStreams: Stream[] = db.filter(s => compareDate(s.date, todayDate))
  console.log('todayDate: ', todayDate)
  console.log('todayStreams: ', todayStreams)
  return { todayStreams }
}

export default defineComponent({
  name: 'PageIndex',
  components: { StreamComponent },
  setup () {
    return { ...getTodayStreams() }
  }
})
</script>
