<template>
  <div>
    <div class="book_nd_fluid" v-if="innerData">
      <div class="book_nd_main_content">
        <!-- background bottom -->
        <div class="book_nd_main_content_bottom_bg">
          <img src="../assets/images/ormanents1.png" />
        </div>
        <!-- background bottom -->
        <!-- <main>
          <audio ref="player" crossorigin="true"></audio>

          <div class="box">
            <div class="buttons">
              <div class="icon btn" @click="togglePlay">
                {{ playing ? "pause_circle_outline" : "play_circle_outline" }}
              </div>
              <div class="icon btn" @click="stop">stop</div>
            </div>
          </div>
        </main>-->
        <!-- // background-image -->
        <div class="book_nd_main_content_bg"></div>

        <!-- // background-image -->

        <div class="book_nd_tittle">
          <div class="book_nd_img" id="bok">
            <kinesis-container>
              <kinesis-element :strength="10" type="depth" :distance="10">
                <img :src="innerData.image" />
              </kinesis-element>
            </kinesis-container>
          </div>
          <h2>{{ innerData.title_ka }}</h2>
        </div>

        <div class="book_nd_main_text">
          <p v-html="innerData.text_ka"></p>
        </div>
      </div>
    </div>

    <div class="book_nd_fluid" v-if="!innerData">
      <div class="book_nd_main_content error_info">
        <h2>ინფორმაცია ვერ მოიძებნა</h2>
      </div>
    </div>

    <appCommonPhrazes v-if="innerData" :PhrazhesData="innerData.phrase_ka"></appCommonPhrazes>
  </div>
</template>

<script>
import axios from "axios";
import CommonPhrazes from "../components/HomeComponents/HomePhases.vue";
export default {
  components: {
    appCommonPhrazes: CommonPhrazes
  },
  data() {
    return {
      audio: "../assets/audio/mus.mp3",
      innerData: [],
      BottomPhrazhes: null,
      message: "web audio experiments - radio with vue",
      audioContext: null,
      audioElement: null,
      gainNode: null,
      panner: null,
      pannerOptions: { pan: 0 },
      songs: [
        {
          title: "Well All Right",
          description: "Traffic",
          url:
            "https://raw.githubusercontent.com/robertleroy/radio/master/audio/Well%20All%20Right.mp3"
        },
        {
          title: "Watermelon Man",
          description: "Herbie Hancock",
          url: "https://robertleroy.github.io/radio/audio/Watermelon%20man.mp3"
        },
        {
          title: "Caravan",
          description: "Thelonious Monk",
          url:
            "https://raw.githubusercontent.com/robertleroy/radio/master/audio/Caravan.mp3"
        },
        {
          title: "Fried Neckbones",
          description: "Willie Bobo",
          url:
            "https://raw.githubusercontent.com/robertleroy/radio/master/audio/Fried%20Neck%20Bones.mp3"
        }
      ],
      stations: [
        {
          title: "MSNBC",
          description: "News & Politics",
          url: "http://198.178.123.5:12386/home.pls?sid=1"
        },
        {
          title: "CNN",
          description: "News & Politics",
          url: "http://tunein.streamguys1.com/cnn"
        },
        {
          title: "KGOU",
          description: "NPR",
          url: "http://20603.live.streamtheworld.com:80/KGOUFM_64_SC"
        },
        {
          title: "KQED",
          description: "NPR",
          url: "http://kqed.ice.lbdns-streamguys.com/kqedradio"
        }
      ],
      volume: 2,
      track: null,
      playing: false,
      balance: 0
    };
  },
  methods: {
    togglePlay() {
      if (this.track === null) {
        // console.log("if track");
        this.loadAudio();
        return;
      }

      console.log("togglePlay");

      if (this.playing === false) {
        // this.track.connect(this.gainNode).connect(this.audioCtx.destination);
        this.play();
      } else if (this.playing === true) {
        this.pause();
      }

      this.audioElement.addEventListener("ended", () => {
        this.playing = "false";
      });
    },

    loadAudio() {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioContext = new AudioContext();
      this.gainNode = this.audioContext.createGain();
      this.panner = new StereoPannerNode(this.audioContext, this.pannerOptions);
      this.audioElement = this.$refs.player;
      this.audioElement.src = this.songs[3].url;

      this.track = this.audioContext.createMediaElementSource(
        this.audioElement
      );

      this.gainNode.gain.value = this.volume;
      this.panner.pan.value = this.balance;

      this.track
        .connect(this.gainNode)
        .connect(this.panner)
        .connect(this.audioContext.destination);

      console.log("loadAudio");
      this.togglePlay();
    },

    play() {
      this.audioElement.play();
      this.playing = true;
    },

    pause() {
      this.audioElement.pause();
      this.playing = false;
    },

    stop() {
      this.audioElement.pause();
      this.audioElement.currentTime = 0;

      this.playing = false;
    },

    updateVolume() {
      this.gainNode.gain.value = this.volume;
    },

    updateBalance() {
      this.panner.pan.value = this.balance;
    }
  },
  // watch: {
  //   volume: function(val) {
  //     this.updateVolume();
  //   },

  //   balance: function(val) {
  //     this.updateBalance();
  //   }
  // },
  created() {
    var _this = this;

    axios
      .get("http://datainfo.online/api/ka/books/" + this.$route.params.id + "")
      .then(response => {
        _this.innerData = response.data.data;
      })
      .catch(function(error) {
        console.log(error);
        _this.innerData = false;
      });
  }
};
</script>

<style>
#bok div {
  height: 100%;
}
</style>
