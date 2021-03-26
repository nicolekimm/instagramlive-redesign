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
                ref="input"
                type="search"
                debounce="500"
                filled
                placeholder="Search">
                <template v-slot:append style="border-radius:30px">
                  <q-icon name="search"  @click="doSearch"></q-icon>
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
                <q-btn align="around" size="md" class="full-width" @click="go(item, key)" outline color="black" no-caps unelevated>
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
            <div v-if="!searchOn" class="main-content" :value="headerKey">
                <div :v-bind="headerKey" v-for="(item, idx) in categoriesList[headerKey].photos" :key="idx" class="blocks" style=" width: 100%">
                  <q-img
                    class = "image1"
                    :src='item'
                    style="height: 140px; flex: 1"
                  />
                </div>
            </div>
            <div v-else class="main-content" :value="headerKey">
                <div :v-bind="headerKey" v-for="(item, idx) in searchList[headerKey].photos" :key="idx" class="blocks" style=" width: 100%">
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
      searchOn: false,
      search: "",
      header : 'Sports',
      btnColor: 'black',
      url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
      url2: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      url3: '../images/volleyball1.jpg',
      url4: '.././images/volleyball2.jpg',
      searchList : [],
      categoriesList : [
        { id : 1, name : "Sailing", searchTerms: ['sailing', 'ocean', 'water'], photos :  
        ['https://images.unsplash.com/photo-1546214755-c5d22447b43b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2FpbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1500627964684-141351970a7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80',
        'https://images.unsplash.com/photo-1498994292978-4d6ff757c6dc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1498623116890-37e912163d5d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHNhaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1526631011044-3fae1501ec7c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNhaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1601611864765-5530bcc425c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHNhaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1594050269245-6342c831b492?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fHNhaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1614521741633-67e77b01f011?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fHNhaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1534181220741-388dc50c711d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fHNhaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60']},
        { id : 2, name : "Volleyball", searchTerms: ['volleyball', 'land', 'ball'], photos : ['https://images.unsplash.com/photo-1593115379577-a21ea97d6645?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8dm9sbGV5YmFsbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
          'https://images.unsplash.com/photo-1553451310-1416336a3cca?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHZvbGxleWJhbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        ] },
        { id : 3, name : "Basketball" , searchTerms: ['basketball', 'land', 'ball'], photos : [ 'https://images.unsplash.com/photo-1527702544404-98b15682485f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fHZvbGxleWJhbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmFza2V0YmFsbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        ] },
        { id : 4, name : "Swimming", searchTerms: ['swimming', 'ocean', 'water'], photos : [
          'https://images.unsplash.com/photo-1596247865408-cb5107b24afc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHN3aW1taW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1580253046571-be2ed96a7c0e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fHN3aW1taW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        ] }
      ],
      headerKey: 0,
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

    }, 
    doSearch() {
        this.searchOn = true;
        this.searchList = this.categoriesList.filter(item => item.searchTerms.includes(this.search.toLowerCase()));
        console.log(this.searchList);
    },
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