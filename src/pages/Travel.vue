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
            <q-btn outline align="around" size="md" class="full-width" :color="headerKey===key ? 'secondary' : 'black'"
            @click="go(item, key)" no-caps unelevated>
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
              <div class="main-content" :value="headerKey">
                <div :v-bind="headerKey" v-for="(item, idx) in categoriesList[headerKey].photos" :key="idx" class="blocks" style=" width: 100%">
                  <q-img
                    class = "image1"
                    :src='item'
                    style="height: 140px; flex: 1"
                  />
            </div>
          </div>
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
      header : 'Travel',
      btnColor: 'black',
      url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
      url2: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      url3: '../images/volleyball1.jpg',
      url4: '.././images/volleyball2.jpg',
      categoriesList : [
        { id : 1, name : "Food", photos :  
        ['https://images.unsplash.com/photo-1560055932-595dab110124?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YnJ1bmNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1516213335993-159eca2981af?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YnJ1bmNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60']},
        { id : 2, name : "Backpacking", photos : ['https://images.unsplash.com/photo-1531242450852-175ae27d351c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmFja3BhY2tpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
          'https://images.unsplash.com/photo-1569705262909-884a1197c70c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8YmFja3BhY2tpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        ] },
        { id : 3, name : "Guides" , photos : [ 'https://images.unsplash.com/photo-1606207703250-3954855894cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0aW9uYWwlMjBwYXJrcyUyMGd1aWRlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1606629693684-013d152e1395?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0aW9uYWwlMjBwYXJrcyUyMGd1aWRlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        ] },
        { id : 4, name : "Parks", photos : [
          'https://images.unsplash.com/photo-1614800458644-1f772baee53f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0aW9uYWwlMjBwYXJrc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1595126461793-4605a6479982?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0aW9uYWwlMjBwYXJrc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
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
      this.changeMe(item)
      this.header = item.name
      this.headerKey = key
      console.log(item.name)
      console.log(key)
      console.log("got here!")
    },
    changeMe(item){
      this.btnColor = 'secondary'
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
      grid-template-columns: 30% 30% 30%
      margin-left: 8px
      margin-right: -34px
    .image1 
      flex: 1
    
</style>