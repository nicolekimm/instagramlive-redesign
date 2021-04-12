<template>
  <q-page class="constrain q-pa-sm">

    <q-header
        class="bg-white text-grey-10"
        bordered>
        <q-toolbar>
            <q-toolbar-title>
            {{this.header}}
            </q-toolbar-title>
            <div>
              <span class="material-icons md-48" style="font-size: 25px; padding:2px" @click="showAddOptions">
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
            class = "image"
            src="../images/recc.png"
            style="height: 140px; width: 365px"
            @click="$router.replace('/live/categories')"
          >
          <div class="absolute-bottom text-subtitle1 flex flex-center">
              Recommended for you
            </div>
          </q-img>
        <q-img
          class = "image"
          src="https://images.unsplash.com/photo-1560055932-595dab110124?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YnJ1bmNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'"
          style="height: 140px; width: 365px"
          @click="$router.replace('/live/categories/food')"
          >
        <div class="absolute-bottom text-subtitle1 flex flex-center">
            Food
          </div>
        </q-img>


        <q-img
          class = "image1"
          src='https://images.unsplash.com/photo-1606207703250-3954855894cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0aW9uYWwlMjBwYXJrcyUyMGd1aWRlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
          style="height: 140px; width: 365px"
          @click="$router.replace('/live/categories/travel')"
        >
        <div class="absolute-bottom text-subtitle1 flex flex-center">
          Travel
          </div>
        </q-img>

        <q-img
          class = "image1"
          src="../images/volleyball2.jpg"
          style="height: 140px; width: 365px"
          @click="$router.replace('/live/categories/sports')"
          >
        <div class="absolute-bottom text-subtitle1 flex flex-center">
            Sports
          </div>
        </q-img>

         <q-img
          class = "image1"
          src='../images/shopp.jpg'
          style="height: 140px; width: 365px"
          @click="$router.replace('/live/categories/shopping')"
        >
        <div class="absolute-bottom text-subtitle1 flex flex-center">
          Shopping
          </div>
        </q-img>

      </div>
    </q-item>
    <schedule-tab></schedule-tab>
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
            <q-btn flat no-caps style="font-size: 17px" to="/story">
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
  </q-page>
</template>

<script>
import LiveHeader from 'src/components/LiveHeader.vue'
import ScheduleTab from 'src/components/ScheduleTab.vue'
import CategoriesHeader from 'src/components/CategoriesHeader.vue'
export default {
  name: 'PageVideoMain',
  components: {
    LiveHeader,
    ScheduleTab,
    CategoriesHeader
  },
  data () {
    return {
      header: 'Live Page',
      createCard: false,
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
    .image1:hover
      background-color:blue
      opacity: 1
      transition: .3s

</style>