<template lang="">
  <v-card>
    <v-card-text>
        <v-textarea v-model="txt"></v-textarea>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="dbWrite">write</v-btn>
      <v-btn @click="dbRead">read</v-btn>
    </v-card-actions>
    
  </v-card>
</template>
<script>
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { collection, addDoc, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAZ0ofck_cFkkzvkyMRmDC-IFOChpPGn4k',
  authDomain: 'hana-streaming.firebaseapp.com',
  databaseURL:
    'https://hana-streaming-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'hana-streaming',
  storageBucket: 'hana-streaming.appspot.com',
  messagingSenderId: '797461931684',
  appId: '1:797461931684:web:bfc081a187ac078a482831',
  measurementId: 'G-7WF6JSSHT8',
}

export default {
  name: 'test',
  data() {
    return {
      txt: '',
      db: null,
    }
  },
  mounted() {
    // Initialize Firebase
    const firebaseApp = initializeApp(firebaseConfig)
    // const analytics = getAnalytics(app)
    this.db = getFirestore()
  },
  methods: {
    dbWrite() {
      try {
        const docRef = addDoc(collection(this.db, 'users'), {
          first: 'Ada',
          last: 'Lovelace',
          born: 1815,
        })
        console.log('Document written with ID: ', docRef.id)
      } catch (e) {
        console.error('Error adding document: ', e)
      }

      try {
        const docRef = addDoc(collection(this.db, 'users'), {
          first: 'Alan',
          middle: 'Mathison',
          last: 'Turing',
          born: 1912,
        })

        console.log('Document written with ID: ', docRef.id)
      } catch (e) {
        console.error('Error adding document: ', e)
      }
    },
    dbRead() {
      const querySnapshot = getDocs(collection(this.db, 'users'))
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`)
      })
    },
  },
}
</script>
<style lang="">
</style>