
<template>
<!--schedule tab-->
  <q-card class="my-card absolute-bottom" flat bordered ref="createCard" v-if="createCard">
    <q-card-section>
      <div class="text-h6" align="center" @click= "compressOptions">Schedule Live</div>
    </q-card-section>
    <q-separator />
    <q-card-actions>
      <q-btn flat round icon="eva-grid-outline" />
      <q-btn flat no-caps style="font-size: 17px">
        Post
      </q-btn>
    </q-card-actions>
    <q-separator />
    <q-card-actions>
      <q-btn flat round icon="restore" />
      <q-btn flat no-caps style="font-size: 17px" to="/story">
        Story
      </q-btn>
    </q-card-actions>
    <q-separator />
    <q-card-actions>
      <q-btn flat round icon="stars" />
      <q-btn flat no-caps style="font-size: 17px">
        Story Highlight
      </q-btn>
    </q-card-actions>
    <q-separator />
    <q-card-actions>
      <q-btn flat round icon="tv" />
      <q-btn flat no-caps style="font-size: 17px">
        IGTV Video
      </q-btn>
    </q-card-actions>
    <q-separator />
    <q-card-actions>
      <q-btn flat round icon="play_circle_outline" />
      <q-btn flat no-caps style="font-size: 17px">
        Reel
      </q-btn>
    </q-card-actions>
    <q-separator />
    <q-card-actions>
      <q-btn flat round icon="live_tv" />
      <q-btn flat no-caps style="font-size: 17px">
        Live Video
      </q-btn>
    </q-card-actions>
    <q-separator />
    <q-card-actions>
      <q-btn flat round icon="map" />
      <q-btn flat no-caps style="font-size: 17px">
        Guide
      </q-btn>
    </q-card-actions>
        </q-card>
        <!--schedule tab end-->
</template>

<script>
export default {
  name: 'ScheduleTab',
  data () {
    return {
      createCard: false,
    }
  },
  methods: {
    showAddOptions() {
      this.createCard=true
    },
    compressOptions() {
      this.createCard=false
    },
  }

}
</script>

<style>

</style>
