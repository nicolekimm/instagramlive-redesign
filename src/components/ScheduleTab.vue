<template>
    <div>
    
    <q-dialog v-model="dialog" :position="position">
      <q-card style="width: 350px">

        <q-card-section class="row items-center no-wrap">
          <div>
            <div class="text-weight-bold">Schedule</div>
            <div class="text-grey">Options</div>
          </div>

          <q-space></q-space>

  
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>



<script>

export default {
  name: 'ScheduleTab',
  data () {
    return {
    }
  }
}
</script>

<script>

// export default {
//   name: 'ScheduleTab',
//   methods: {
//     showScheduleTab () {
//       this.$q.notify('Some other message')
//     }
//   }
// }
// </script>

<style lang="sass">
    .q-header
      .q-toolbar__title
        font-size: 25px
        font-weight: bold
</style>