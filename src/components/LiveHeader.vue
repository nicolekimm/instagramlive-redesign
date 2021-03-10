<template>
    <q-header
        class="bg-white text-grey-10"
        bordered
    >
        <q-toolbar>

            <q-toolbar-title>
            Live Videos
            </q-toolbar-title>
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