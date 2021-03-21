<template>
    <q-page class="constrain q-pa-md"> 
        <div class="camera-frame q-pa-md">
            <video
                v-show="!videoCaptured"
                ref= "video"
                class="full-width"
                autoplay
                playsinline
            />
            <canvas
                v-show="videoCaptured"
                ref="canvas"
                class="full-width"
                height="240"
            />
        </div>   
        <div class="text-center q-pa-md">
            <q-btn 
                @click="captureVideo"
                round
                color="grey-10"
                icon="eva-play-circle" 
                size="lg"
            />
        </div>
    </q-page>
</template>

<script>
require('md-gum-polyfill');
export default {
    name: 'Story',
    data() {
        return {
            play: true,
            videoCaptured: false,
        };
    },
    methods: {
        initCamera() {
            navigator.mediaDevices.getUserMedia({
                video: true
            }).then(stream => {
                this.$refs.video.srcObject = stream;
            })
        },
        captureVideo() {
            let video = this.$refs.video;
            let canvas = this.$refs.canvas;
            canvas.width = video.getBoundingClientRect().width;
            canvas.height = video.getBoundingClientRect().height;
            let context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            this.videoCaptured = true;
        },
    },
    mounted() {
        this.initCamera();
    }
}
</script>

<style lang="sass">
    .camera-frame   
        border: 2px solid $grey-10
        border-radius: 10px
</style>