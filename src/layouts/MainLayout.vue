<template>
  <q-layout view="lHh Lpr lFf">

    <q-footer
      class="bg-white"
      bordered
    >
        <q-tabs
          class="text-grey-10"
          active-color="primary"
        >
            <q-tab
              name="home"
              icon="eva-home-outline"
            />
            <q-tab
              name="search"
              icon="eva-search-outline"
            />
            <q-tab
              name="igtv"
              icon="play_circle_outline"
            />
            <q-route-tab
              to="/live"
              name="live"
              icon="tv"
            />
            <q-route-tab
              to="/"
              name="profile"
              icon="account_circle"
            />
        </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
    .q-footer
      .q-tab__icon
        font-size: 30px
</style>
