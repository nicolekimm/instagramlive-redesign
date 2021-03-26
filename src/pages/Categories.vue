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
                placeholder="Search">
                <template v-slot:append style="border-radius:30px">
                  <q-icon name="search"></q-icon>
                </template>
              </q-input>
            </div>
          </div>
          </q-item>
      <q-item-section>
        <q-item-label class="name q-ml-lg">{{header}}</q-item-label>
      </q-item-section>
      <div class="my-buttons">
        <div v-for="(item, key) in categoriesList" :key="key" class="button-style">
            <q-btn align="around" size="md" class="full-width" outline color="black" @click="go(item, key)" no-caps unelevated>
              {{ item.name }}
            </q-btn>
          </div>
        </div>
            <q-tabs
                class="text-grey-10"
                active-color="black">
                  <q-tab
                    name="feed"
                    icon="eva-grid-outline"
                    @click="showLive"/>
                  <q-tab
                    name="live"
                    icon="tv"
                    @click="showFeed"/>
              </q-tabs>
              <q-item class="main-content" :value="headerKey">
                <div :v-bind="headerKey" v-for="(item, idx) in categoriesList[headerKey].photos" :key="idx" class="blocks" style=" width: 100%">
                  <q-img
                    class = "image1"
                    :src='item'
                    style="height: 140px; max-width: 110px; flex: 1"
                  />
            </div>
          </q-item>
  </q-page>
</template>

<script>
import CategoriesHeader from '../components/CategoriesHeader.vue'
import json from '../data/categories.json'

export default {
  name: 'Categories',
  components: {
    CategoriesHeader
  },
  data () {
    return {
      header : 'sports',
      url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
      url2: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      url3: '.././images/volleyball1.jpg',
      url4: '.././images/volleyball2.jpg',
      categoriesList : [
        { id : 1, name : "sailing", photos :  
        ['https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
        'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
        'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
        'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
        'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
        'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
        'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
        'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
        'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80']},
        { id : 2, name : "volleyball", photos : [ 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
          'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
        ] },
        { id : 3, name : "basketball" , photos : [ 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
        'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
        ] },
        { id : 4, name : "swimming", photos : [
          'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
        'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
        ] }
      ],
      headerKey: 0,
      search: '',
      myJson: json
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
    go(item, key){
      this.header = item.name
      this.headerKey = key
      console.log(item.name)
      console.log(key)
      console.log("got here!")
    },
    created(){

    }
    // getCategories(){
    //   fetch('/categories.json')
    //     .then(json => {
    //       console.log(json)
    //       this.db = json
    //     })

        // .then((response) => { 
        //   console.log(response.json())
        //   this.data = response.data
        // })
        // .catch((err) => {
        //   console.log(err)
        // })
    }
  // mounted(){
  //   this.getCategories();
  // }
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
    .my-buttons
      display: flex
      flex-direction: columns
    .button-style
      padding:3px
      margin-top: 10px
    .blocks 
      display: flex
      flex-direction: wrap
    .main-content
      display: grid
      grid-template-columns: auto auto auto
    .image1 
      flex: 1
    
</style>