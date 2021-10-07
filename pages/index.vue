<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <HanaStream />
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
</template>

  <!-- <div id="app">
    <h2>Youtube Lazy Video</h2>

    <input class="input" type="text" @keydown.enter="handleSearch($event, 'youtube')" placeholder="Youtube Video Link or Video Id" :value="youtubeLink">

    <LazyYoutube
        ref="youtubeLazyVideo"
        :src="youtubeLink"
        max-width="720px"
        aspect-ratio="16:9"
        thumbnail-quality="standard"
    />

    <div class="buttons">
      <button @click="handleClick('playVideo', 'youtubeLazyVideo')">Play</button>
      <button @click="handleClick('stopVideo', 'youtubeLazyVideo')">Stop</button>
      <button @click="handleClick('pauseVideo', 'youtubeLazyVideo')">Pause</button>
      <button @click="handleClick('resetView', 'youtubeLazyVideo')">Reset</button>
    </div>


  </div>
</template>

<script>
import LazyYoutube from '../components/LazyYoutube'
export default {
  name: 'App',
  data () {
    return {
      youtubeLink:'https://www.youtube.com/watch?v=TcMBFSGVi1c',
    }
  },
  components: {
    LazyYoutube
  },
  mounted() {
    // this.$refs['lazyVideo'].playVideo();
  },
  methods: {
    handleClick(event, ref) {
      this.$refs[ref][event]()
    },
    handleSearch(e, platform) {
      this.youtubeLink = e.target.value;
    }
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
h2 {
  margin-bottom: 0;
  margin-top: 2rem;
}
.input {
  padding: 5px;
  max-width: 720px;
  margin-top: 25px;
  margin-bottom: 25px;
  width: 90%;
}
.buttons {
  margin-top: 25px;
}
</style> -->