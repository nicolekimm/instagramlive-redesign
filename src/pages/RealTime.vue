<template>
    <q-page class="constrain q-pa-md"> 
        <div class="camera-frame q-pa-md" >
            <div class="row justify-between">
                <q-btn flat round icon="comments" size="lg" @click= "showAddOptions"/>
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
                3k people are watching
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
                    @click="captureVideo"
                    round
                    color="red"
                    icon="radio_button_checked"
                    size="lg"
                />
            </div>

        <q-card class="my-card absolute-bottom" flat bordered ref="createCard" v-if="createCard">
            <q-card-section>
                <div class="text-h6" align="center" @click= "compressOptions">Chat</div>
            </q-card-section>
            <q-separator />
            <div class="q-pa-md row justify-center">
                <div style="width: 100%; max-width: 400px">
                <q-chat-message
                    name="@janedoe"
                    avatar="../images/janedoe.jpg"
                    :text="['Hey!']"
                    stamp="7 minutes ago"
                    sent
                    bg-color="amber-7"
                />
                <q-chat-message
                    name="@nadia"
                    avatar="https://cdn.quasar.dev/img/avatar5.jpg"
                    :text="[
                    'How are you?',
                    'I am soooo tired'
                    ]"
                    size="6"
                    stamp="4 minutes ago"
                    text-color="white"
                    bg-color="primary"
                />
                <q-chat-message
                    name="@janedoe"
                    avatar="../images/janedoe.jpg"
                    :text="['Good!']"
                    stamp="3 minutes ago"
                    sent
                    bg-color="amber-7"
                />
                <q-chat-message
                    name="@kate"
                    :text="['Yay! Sooooo whats up?']"
                    bg-color="primary"
                    text-color="white"
                >
                    <template v-slot:avatar>
                    <img
                        class="q-message-avatar q-message-avatar--received"
                        src="https://cdn.quasar.dev/img/avatar2.jpg"
                    >
                    </template>

                    <q-spinner-dots size="2rem" />
                </q-chat-message>
                <q-input class="q-mt-lg" rounded outlined v-model="text" label="Type a message...">
                    <template v-slot:append>
                    <q-icon name="eva-message-circle-outline" color="orange" />
                    </template>
                </q-input>
                </div>
            </div>

        </q-card>

        </div>   

    </q-page>
</template>

<script>
require('md-gum-polyfill');
export default {
    name: 'RealTime',
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
            alert("Live stream ended! Uploading to your profile...")
            window.location.href = '/';
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