<template>
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
</template>

<script>

export default {
  name: 'LiveHeader',
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
    .q-header
      .q-toolbar__title
        font-size: 25px
        font-weight: bold
</style>