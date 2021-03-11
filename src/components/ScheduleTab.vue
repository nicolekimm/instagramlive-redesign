<template>
    <q-card class="my-card" style="width: 100%">
      <q-card-section>
      <q-card-section>
        <center>
        <div class="text-h6">Schedule a Live</div>
        <!-- <div class="text-subtitle2">Subtitle</div> -->
        </center>
      </q-card-section>

      <q-card-actions>
        <q-btn flat round icon="event"></q-btn>
        <q-btn flat>
          7:30PM
        </q-btn>
        <q-btn flat color="primary">
          Pick time
        </q-btn>
      </q-card-actions>

      <q-separator></q-separator>
       
      <q-card-actions vertical>
        <q-btn flat>Action 1</q-btn>
        <q-separator></q-separator>
       
        <div class="text-subtitle2" style="font-weight:bold;">Pick your audience
          <p>blah</p>
          <p>blah</p>
          <p>blah</p>
          
          
          </div>


        <q-btn>Schedule</q-btn>
        
      </q-card-actions>
      </q-card-section>
    </q-card>

      
         

          
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

<style lang="sass">
    // .q-header
    //   .q-toolbar__title
        // font-size: 25px
        // font-weight: bold
</style>