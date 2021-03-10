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

export default {
  name: 'ProfileHeader',
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