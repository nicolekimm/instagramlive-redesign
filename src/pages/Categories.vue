<template>
  <q-page class="constrain q-pa-sm">
      <div>
        <categories-header></categories-header>
      </div>
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
        <q-item-label class="name q-ml-lg">Volleyball</q-item-label>
      </q-item-section>

      <div class="q-pa-md" style="display:flex;">
          <q-btn align="around" size="md" class="full-width"  label="Basketball" outline color="black" no-caps unelevated/>
          <q-btn align="around" size="md" class="full-width"  label="Volleyball" color="grey" no-caps unelevated />
          <q-btn align="around" size="md" class="full-width"  label="Swimming" outline color="black" no-caps unelevated/>
          <q-btn align="around" size="md" class="full-width"  label="Skiing" outline color="black" no-caps unelevated/>
      </div>

      <q-tabs
          class="text-grey-10"
          active-color="black"
        >
            <q-tab
              name="feed"
              icon="eva-grid-outline"
              @click="showLive"
            />
            <q-tab
              name="live"
              icon="tv"
              @click="showFeed"
            />
        </q-tabs>
        <q-item>
          <div class="q-pa-md" style="width: 100%">
        <q-img
          class = "image1"
          src="../images/volleyball4.jpg"
          style="height: 140px; max-width: 110px"
        />

        <q-img
          class = "image2"
          src="../images/volleyball3.jpg"
          style="height: 140px; max-width: 110px"
        />

        <q-img
          class = "image3"
          src="../images/volleyball1.jpg"
          style="height: 140px; max-width: 110px"
        />

        <q-img
          class = "image4"
          src="../images/volleyball2.jpg"
          style="height: 140px; max-width: 110px"
        />

        <q-img
          class = "image1"
          src="../images/volleyball4.jpg"
          style="height: 140px; max-width: 110px"
        />

        <q-img
          class = "image2"
          src="../images/volleyball3.jpg"
          style="height: 140px; max-width: 110px"
        />

        <q-img
          class = "image3"
          src="../images/volleyball1.jpg"
          style="height: 140px; max-width: 110px"
        />

        <q-img
          class = "image4"
          src="../images/volleyball2.jpg"
          style="height: 140px; max-width: 110px"
        />

        <q-img
          class = "image1"
          src="../images/volleyball4.jpg"
          style="height: 140px; max-width: 110px"
        />

        <q-img
          class = "image2"
          src="../images/volleyball3.jpg"
          style="height: 140px; max-width: 110px"
        />

        <q-img
          class = "image3"
          src="../images/volleyball1.jpg"
          style="height: 140px; max-width: 110px"
        />

        <q-img
          class = "image4"
          src="../images/volleyball2.jpg"
          style="height: 140px; max-width: 110px"
        />
      </div>
    </q-item>
  </q-page>
</template>

<script>
import CategoriesHeader from '../components/CategoriesHeader.vue'

export default {
  name: 'Categories',
  components: {
    CategoriesHeader
  },
  data () {
    return {
      url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
      url2: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      url3: '.././images/volleyball1.jpg',
      url4: '.././images/volleyball2.jpg',

      search: '',
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
</style>