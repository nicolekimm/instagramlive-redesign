<template>
  <q-page class="constrain q-pa-sm">
        <categories-header></categories-header>
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
            <q-btn outline align="around" size="md" class="full-width" @click="$router.replace('/live/categories/' + item.name)"
            :color="headerKey===key ? 'secondary' : 'black'" no-caps unelevated>
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
                    style="height: 140px; flex: 1">
                      <div class="absolute-bottom-right text-subtitle2" 
                      style="background: none; text-shadow: -1px 0 grey, 0 1px grey, 1px 0 grey, 0 -1px grey;">
                        <q-icon name="play_arrow" />
                        {{idx*50}}k
                      </div>
                      <div class="absolute-full text-subtitle1 flex flex-center my-text">
                        <q-icon name="play_arrow" />
                        {{idx*50}}k
                        <p style="display: flex">@janedoe</p>
                        <q-item-section avatar class="col-5">
                        <q-avatar
                          size="40px"
                          style="margin-left: 20px; margin-top: -15px"
                        >
                          <q-img
                            src="../images/janedoe.jpg"
                          > 
                          </q-img>
                        </q-avatar>
                      </q-item-section>
                      </div>
                  </q-img>

            </div>
          </div>
          <schedule-tab></schedule-tab>
  </q-page>
</template>

<script>
import ScheduleTab from '../components/ScheduleTab.vue'
import CategoriesHeader from '../components/CategoriesHeader.vue'
import json from '../data/categories.json'

export default {
  name: 'Categories',
  components: {
    CategoriesHeader,
    ScheduleTab
  },
  data () {
   
    return {
      createCard: false,
      header : 'Recommended For You',
      btnColor: 'black',
      url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
      url2: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      url3: '../images/volleyball1.jpg',
      url4: '.././images/volleyball2.jpg',
      categoriesList : [
        { id : 0, name : "All", photos : ['https://images.unsplash.com/photo-1612392061787-2d078b3e573c?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1546214755-c5d22447b43b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2FpbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1500627964684-141351970a7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80',
        'https://images.unsplash.com/photo-1593115379577-a21ea97d6645?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8dm9sbGV5YmFsbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1498623116890-37e912163d5d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHNhaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1553451310-1416336a3cca?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHZvbGxleWJhbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1527702544404-98b15682485f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fHZvbGxleWJhbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmFza2V0YmFsbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        ]  },
        { id : 1, name : "Sports", photos :  
        ['https://images.unsplash.com/photo-1546214755-c5d22447b43b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2FpbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1500627964684-141351970a7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80',
        'https://images.unsplash.com/photo-1498994292978-4d6ff757c6dc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1498623116890-37e912163d5d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHNhaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1526631011044-3fae1501ec7c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNhaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1601611864765-5530bcc425c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHNhaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1594050269245-6342c831b492?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fHNhaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1614521741633-67e77b01f011?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fHNhaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1534181220741-388dc50c711d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fHNhaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60']},
        { id : 2, name : "Food", photos : ['https://images.unsplash.com/photo-1593115379577-a21ea97d6645?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8dm9sbGV5YmFsbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
          'https://images.unsplash.com/photo-1553451310-1416336a3cca?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHZvbGxleWJhbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        ] },
        { id : 3, name : "Travel" , photos : [ 'https://images.unsplash.com/photo-1527702544404-98b15682485f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fHZvbGxleWJhbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmFza2V0YmFsbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        ] },
      ],
      headerKey: 0,
      search: '',
      myJson: json
    }
  },
  methods: {
    showAddOptions() {
      this.createCard = true
    },
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
    .image1 .my-text 
      visibility: hidden
      opacity: 0
      transition: .3s

  .image1:hover .my-text
    visibility: visible
    opacity: 1
    transition: .3s

  .absolute-bottom-right.text-subtitle2
    padding: !important -10px 
</style>