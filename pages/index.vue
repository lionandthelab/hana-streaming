<template>
<div>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <HanaStream :hanaurl=getData1()        />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          hana-streaming
        </v-card-title>
        <v-card-text>
          <p>바로 시청하세요</p>
          <!-- <button type="button" @click="getData">GET</button>
          <button type="button" @click="setData">SET</button> -->
          <br>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <HanaStream :hanaurl=getData2() />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          hana-streaming
        </v-card-title>
        <v-card-text>
          <p>바로 시청하세요</p>
          <br>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <HanaStream :hanaurl=getData3() />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          hana-streaming
        </v-card-title>
        <v-card-text>
          <p>바로 시청하세요</p>
          <br>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <HanaStream :hanaurl=getData4() />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          hana-streaming
        </v-card-title>
        <v-card-text>
          <p>바로 시청하세요</p>
          <br>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>
<script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js"></script>
<script>  
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDoc, setDoc, doc  } from "firebase/firestore";
      const firebaseApp = initializeApp({
        apiKey: 'AIzaSyCfcivQ5N9ZVzWsE2eoi_OINdrzPw_Lfdk',
        authDomain: 'streamingtest-15093.firebaseapp.com',
        projectId: 'streamingtest-15093'
      });
      const db = getFirestore();

  export default {
    data () {
      return {
        txt: "",
        admin: true,
        url_1:"",
        url_2:"",
        url_3:"",
        url_4:"",
      }
    },
    mounted(){
      this.dbRead();
      console.log('dotenv test',process.env.DB_URL)
    },
    methods: {
      getData1() {
        return this.url_1;
      },
      getData2() {
        return this.url_2;
      },
      getData3() {
        return this.url_3;
      },
      getData4() {
        return this.url_4;
      },
      dbWrite(){
          setDoc(doc(db, "hanastreaming", "url"), {
          url1: this.url_1,
          url2: this.url_2,
          url3: this.url_3,
          url4: this.url_4
        });
      },
      dbRead(){
          getDoc(doc(db, "hanastreaming", "url")).then(docSnap => {
            if (docSnap.exists()) {
              this.url_1 = docSnap.data().url1;
              this.url_2 = docSnap.data().url2;
              this.url_3 = docSnap.data().url3;
              this.url_4 = docSnap.data().url4;
              console.log("url1:", docSnap.data().url1);
              console.log("url2:", docSnap.data().url2);
              console.log("url3:", docSnap.data().url3);
              console.log("url4:", docSnap.data().url4);

            } else {
              console.log("No such document!");
            }
          })
      }
    }
  }
</script>
<style>
  input { 
    color: aliceblue;
    width: 80%;
    border-style: solid;
    border-color: aliceblue;
  }
</style>
