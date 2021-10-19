<template>
  <div id="body">
          <div v-if="admin === false">
            <v-card>
            Password : 
            <input type="text" v-model="password" />
            </v-card>
            <v-btn @click="checkPassword" >로그인</v-btn>
          </div>
          <div id="admin" v-if="admin">
            <hr>
            <v-card>
            <p>
            조이랜드 찬양 URL : 
            <input type="text" v-model="url_1" />
            </p>
            </v-card>
            <hr>
            <v-card>
            <p>
            조이랜드 설교 URL : 
            <input type="text" v-model="url_2" />
            </p>
            </v-card>
            <hr>
            
            <v-card>
            <p>
            조이틴 설교 URL : 
            <input type="text" v-model="url_3" />
            </p>
            </v-card>
            <hr>

            <v-card>
            <p>
            본당 설교 URL : 
            <input type="text" v-model="url_4" />
            </p>
            </v-card>
            <hr>
          </div>
          <v-btn @click="dbWrite" v-if="admin">적용하기</v-btn>

  </div>
</template>

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
        password:"",
        txt: "",
        admin: false,
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
      checkPassword(){
        if(this.password === "123"){
          this.admin = true;
        }else{
          alert("password가 틀렸습니다.");
          this.password = '';
        }
      },  
      dbWrite(){
          setDoc(doc(db, "hanastreaming", "url"), {
          url1: this.url_1,
          url2: this.url_2,
          url3: this.url_3,
          url4: this.url_4
        },);
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
  #body{
    
  }
</style>
