<template>
  <q-page class="constrain q-pa-md">
<<<<<<< HEAD
      <div>
        <!-- <profile-header></profile-header> -->
        <q-header
        class="bg-white text-grey-10"
        bordered
    >
        <q-toolbar>
            <q-toolbar-title>
            janedoe
            </q-toolbar-title>
            <q-tabs
              class="text-grey-10"
              indicator-color="transparent"
            >
                <q-tab
                  name="plus"
                  icon="eva-plus-outline"
                  @click="open('bottom')"
                  color="primary"
                />
                <q-tab
                  name="menu"
                  icon="eva-menu-outline"
                />
            </q-tabs>
        </q-toolbar>
    </q-header>
      </div>
=======
      <q-header
          class="bg-white text-grey-10"
          bordered
      >
          <q-toolbar>
              <q-toolbar-title>
              janedoe
              </q-toolbar-title>
              <q-tabs
                class="text-grey-10"
                indicator-color="transparent"
              >
                  <q-tab
                    name="plus"
                    icon="eva-plus-outline"
                    @click= "showAddOptions"
                  />
                  <q-tab
                    name="menu"
                    icon="eva-menu-outline"
                  />
              </q-tabs>
          </q-toolbar>
      </q-header>
>>>>>>> 2282f5b3f60b42312ae83798603ca10846cc08be
      <div class="row">
          <q-item> 

            <q-item-section avatar class="col-5">
              <q-avatar
                size="100px"
              >
                <q-img
                  src="../images/janedoe.jpg"
                >
                </q-img>
              </q-avatar>
            </q-item-section>

            <q-item-section class="col-3">
              <q-item-label>6</q-item-label>
              <q-item-label caption>Following</q-item-label>
            </q-item-section>
            <q-item-section class="col-3">
              <q-item-label>800</q-item-label>
              <q-item-label caption>Followers</q-item-label>
            </q-item-section>
            <q-item-section class="col-3">
              <q-item-label>700</q-item-label>
              <q-item-label caption>Following</q-item-label>
            </q-item-section>
          </q-item>
      </div>

      <q-item-section>
        <q-item-label class="name q-ml-lg">Jane Doe</q-item-label>
      </q-item-section>

      <div class="q-pa-lg">
          <q-btn align="around" class="full-width"  label="Edit profile" outline color="black" no-caps unelevated/>
      </div>

      <q-tabs
          class="text-grey-10"
          active-color="black"
        >
            <q-tab
              name="feed"
              icon="eva-grid-outline"
              @click="showFeed"
            />
            <q-tab
              name="live"
              icon="live_tv"
              @click="showLive"
            />
            <q-tab
              name="tagged"
              icon="assignment_ind"
              @click="showTagged"
            />
        </q-tabs>

        <q-img
          class = "image1"
          v-if="showImage1"
          src= "../images/profile1.jpeg"
          style="height: 140px; max-width: 130px"
        />

        <q-img
          class = "image2"
          v-if="showImage1"
          src= "../images/profile2.jpeg"
          style="height: 140px; max-width: 130px"
        />

        <q-img
          class = "image3"
          v-if="showImage2"
          src= "../images/profile3.jpeg"
          style="height: 150px; max-width: 120px"
        />
      <div>
      <q-dialog v-model="dialog" :position="position">
      <!-- <q-card style="width: 100%">

<<<<<<< HEAD
        <q-card-section class="row items-center no-wrap">
          <div>
           <schedule-tab></schedule-tab>
          </div>
        </q-card-section>
      </q-card> -->
      <schedule-tab></schedule-tab>
    </q-dialog>
      </div>
=======
        <q-img
          class = "image4"
          v-if="showImage2"
          src= "../images/profile4.jpeg"
          style="height: 150px; max-width: 120px"
        />

        <q-img
          class = "image5"
          v-if="showImage3"
          src= "../images/profile5.jpeg"
          style="height: 140px; max-width: 130px"
        />

        <q-img
          class = "image6"
          v-if="showImage3"
          src= "../images/profile6.jpeg"
          style="height: 140px; max-width: 130px"
        />

        <q-card class="my-card absolute-bottom" flat bordered ref="createCard" v-if="createCard">
          <q-card-section>
            <div class="text-h6" align="center" @click= "compressOptions">Create</div>
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
            <q-btn flat no-caps style="font-size: 17px">
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


>>>>>>> 2282f5b3f60b42312ae83798603ca10846cc08be

  </q-page>
</template>

<script>
<<<<<<< HEAD
// import ProfileHeader from '../components/ProfileHeader.vue';
import ScheduleTab from '../components/ScheduleTab.vue';
export default {
  name: 'PageProfile',
  components: {
    // ProfileHeader,
    ScheduleTab
  },
  data () {
    showScheduleTab: false
    return {
      dialog: false,
      position: 'bottom',
      url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
      url2: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
=======
export default {
  name: 'PageProfile',
  data () {
    showScheduleTab: false
    return {
      showImage1: true,
      showImage2: false,
      showImage3: false,
      createCard: false,
>>>>>>> 2282f5b3f60b42312ae83798603ca10846cc08be
    }
  },
  methods: {
    // for scheduling tab
    open (position) {
      this.position = position
      this.dialog = true
    },
    showFeed () {
      this.showImage1 = true
      this.showImage2 = false
      this.showImage3 = false
    },
    showLive () {
      this.showImage1 = false
      this.showImage2 = true
      this.showImage3 = false
    },
    showTagged () {
      this.showImage1 = false
      this.showImage2 = false
      this.showImage3 = true
    }, 
    showAddOptions() {
      this.createCard = true
    },
    compressOptions() {
      this.createCard = false
    }
  }
}
</script>

<style lang="sass">
    .q-header
      .q-toolbar__title
        font-size: 25px
        font-weight: bold
    .q-item__section
      .q-item__label
        font-size: 13px
      .name
        font-size: 18px
        font-weight: bold
</style>
