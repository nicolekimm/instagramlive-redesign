<template>
    <q-page class="constrain q-pa-md"> 
        <div class="camera-frame q-pa-md">
            <div class="row justify-between">
                <q-btn flat round icon="eva-close-circle-outline" size="lg" to="/" @click="turnOffCamera" />
            </div>
            <div class="img text-center">
                <q-avatar
                    size="50px"
                >
                    <q-img
                        src= "../images/profile1.jpeg"
                    >
                    </q-img>
                </q-avatar>
                <q-avatar
                    size="50px"
                >
                    <q-img
                        src= "../images/profile2.jpeg"
                    >
                    </q-img>
                </q-avatar>
                <q-avatar
                    size="50px"
                >
                    <q-img
                        src= "../images/profile6.jpeg"
                    >
                    </q-img>
                </q-avatar>

            </div>
            <div class="text text-center">
                20 followers are active now
            </div>
            <video
                v-show="!videoCaptured"
                ref= "video"
                class="video full-width"
                autoplay
                playsinline
            />
            <canvas
                v-show="videoCaptured"
                ref="canvas"
                class="video full-width"
            />
            <div class="text-center">
                <q-btn 
                    to="/livestream"
                    round
                    color="grey-10"
                    icon="eva-camera" 
                    size="lg"
                />
            </div>
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
            createCard: false,
            text: ''
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
        turnOffCamera() {
            let mediaStream = this.$refs.video.srcObject;
            let tracks = mediaStream.getTracks();
            tracks.forEach(track=>track.stop());
        },
        showAddOptions() {
        this.createCard = true
        },
        compressOptions() {
        this.createCard = false
        }
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
    .text 
        font-size: 17px
        margin-top: 20px
    .video 
        margin-top: 100px
        margin-bottom: 20px
</style>