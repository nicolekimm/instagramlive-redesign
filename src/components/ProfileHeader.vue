<<<<<<< HEAD
<template>

    <q-header
        class="bg-white text-grey-10"
        bordered
    >
        <q-toolbar>
            <q-toolbar-title>
            janedoe
            </q-toolbar-title>
            <q-tabs
              class="text-grey-10"
              indicator-color="transparent"
            >
                <q-tab
                  name="plus"
                  icon="eva-plus-outline"
                  @click="positioned"
                  color="primary"
                />
                <q-tab
                  name="menu"
                  icon="eva-menu-outline"
                />
            </q-tabs>
        </q-toolbar>
    </q-header>
</template>

<script>

import ScheduleTab from '../components/ScheduleTab.vue';
export default {
  
  name: 'ProfileHeader',

  methods: {

    positioned () {
      this.$q.dialog({
        title: 'Positioned',
        message: 'This dialog appears from bottom.',
        position: 'bottom'
      })
    },
  }

}
</script>

<style lang="sass">
    .q-header
      .q-toolbar__title
        font-size: 25px
        font-weight: bold
</style>
=======
>>>>>>> 2282f5b3f60b42312ae83798603ca10846cc08be
