<template>
  <div class="scan" ref="scan">
    <video id="video" class="scan__videostream" :width="width" :height="height" autoplay muted/>
    <ScanButton @click.native="detectFace"/>
  </div>
</template>

<script>
import ScanButton from '@/components/scan/ScanButton';

export default {
  components: {
    ScanButton
  },
  computed: {
    getWidthAndHeight() {
      return `width: ${this.width}px; height: ${this.height}px`
    }
  },
  data: () => ({
    width: 0,
    height: 0
  }),
  methods: {
    calculateWidth() {
      this.width = this.$refs.scan.clientWidth;
    },
    calculateHeight() {
      this.height = this.$refs.scan.clientHeight;
    },
    getVideoStream() {
      let video = document.getElementById('video');
      navigator.mediaDevices.getUserMedia(
        {
          video: {
          width: this.width,
          height: this.height
          }
        }
      ).then((stream) => {
        video.srcObject = stream;
        // video.addEventListener('play', this.detectFace())
      })
      .catch(error => console.log(error));
    },
    detectFace() {
      let screenshot = this.grabFrameFromStream();
      this.$socket.emit('recognizeFace', screenshot, this.width, this.height, this.handleFaceDetection);
    },
    grabFrameFromStream() {
      let video = document.getElementById('video');
      let canvas = document.createElement('canvas');
      canvas.width = this.width;
      canvas.height = this.height;
      canvas.getContext('2d').drawImage(video, 0, 0);
      return canvas.toDataURL('image/png');
    },
    handleFaceDetection(response) {
      console.log('Face detected?', response);
    }
  },
  mounted() {
    this.calculateWidth();
    this.calculateHeight();
    this.getVideoStream();
  }
}
</script>

<style lang="scss">
.scan {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: calc(100vh - 70px);

    &__videostream {
      background-color: #000;
    }
}
</style>
