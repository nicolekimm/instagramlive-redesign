<template>
  <q-page class="constrain q-pa-sm">
      <q-header
        class="bg-white text-grey-10"
        bordered>
        <q-toolbar>
            <q-toolbar-title>
            Live Videos
            </q-toolbar-title>
            <div>
              <span class="material-icons md-48" style="font-size: 25px; padding:2px">
                add_circle
              </span>
              <span class="material-icons md-48" style="font-size: 25px; padding:2px" >
                event
              </span>
              <span class="material-icons md-48" style="font-size: 30px; padding:2px">
                menu
              </span>
            </div>
        </q-toolbar>
    </q-header>
        <q-item> 
          <div class="q-pa-sm" style="width: 110%; border-radius:50%">
          <div class="q-gutter-md" style="border-radius:50%">
              <q-input
                v-model="search"
                debounce="500"
                filled
                placeholder="Search"
              >
                <template v-slot:append style="border-radius:30px">
                  <q-icon name="search"></q-icon>
                </template>
              </q-input>
            </div>
          </div>
          </q-item>
      <q-item-section>
      </q-item-section>
      
        <q-item>
          <div class="q-gutter-md" style="border-radius:50%">
        
        <q-img
            class = "image1"
            src="../images/volleyball4.jpg"
            style="height: 140px; width: 365px"
            @click="$router.replace('/live/categories')"
          >
          <div class="absolute-full text-subtitle2 flex flex-center">
              Recommended for you
            </div>
          </q-img>
        <q-img
          class = "image2"
          src="../images/volleyball3.jpg"
          style="height: 140px; width: 365px"
          @click="$router.replace('/live/categories/food')"
          >
        <div class="absolute-full text-subtitle2 flex flex-center">
            Food
          </div>
        </q-img>


        <q-img
          class = "image3"
          src="../images/volleyball1.jpg"
          style="height: 140px; width: 365px"
          @click="$router.replace('/live/categories/travel')"
        >
        <div class="absolute-full text-subtitle2 flex flex-center">
          Travel
          </div>
        </q-img>

        <q-img
          class = "image4"
          src="../images/volleyball2.jpg"
          style="height: 140px; width: 365px"
          @click="$router.replace('/live/categories/sports')"
          >
        <div class="absolute-full text-subtitle2 flex flex-center">
            Sports
          </div>
        </q-img>

      </div>
    </q-item>
  </q-page>
</template>

<script>
import LiveHeader from 'src/components/LiveHeader.vue'

export default {
  name: 'PageVideoMain',
  components: {
    LiveHeader
  },
  data () {
    return {
      url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
      url2: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      url3: '.././images/volleyball1.jpg',
      url4: '.././images/volleyball2.jpg',

      search: ''
    }
  },
  methods: {
    showFeed () {
      this.url = 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80'
      this.url2 = 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
    },
    showLive () {
      this.url = 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
      this.url2 = 'https://images.unsplash.com/photo-1588137378625-ba3a4169bf5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
    },
    showTagged () {
      this.url = 'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
      this.url2 = 'https://images.unsplash.com/photo-1504150558240-0b4fd8946624?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    }, 
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
    .q-field--filled 
      .q-field__control
        border-radius:50px
        height:40px

    .q-field__marginal
        height:42px
</style>