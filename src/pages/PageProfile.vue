<template>
  <q-page class="constrain q-pa-md">
      <div>
        <profile-header></profile-header>
      </div>
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
              icon="tv"
              @click="showLive"
            />
            <q-tab
              name="tagged"
              icon="assignment_ind"
            />
        </q-tabs>

        <q-img
          class = "image1"
          :src= "url"
          style="height: 140px; max-width: 110px"
        />

        <q-img
          class = "image2"
          :src= "url2"
          style="height: 140px; max-width: 110px"
        />



  </q-page>
</template>

<script>
import ProfileHeader from '../components/ProfileHeader.vue';
export default {
  name: 'PageProfile',
  components: {
    ProfileHeader
  },
  data () {
    return {
      url: '',
      url2: ''
    }
  },
  methods: {
    showFeed () {
      this.url = 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
      this.url2 = 'https://images.unsplash.com/photo-1588137378625-ba3a4169bf5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
    },
    showLive () {
    }
  }
}
</script>

<style lang="sass">
    .q-item__section
      .q-item__label
        font-size: 13px
      .name
        font-size: 18px
        font-weight: bold
</style>
