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
        <q-btn flat> 7:30PM </q-btn>
        <q-btn flat color="primary"> Pick time </q-btn>
      </q-card-actions>

      <q-separator></q-separator>

      <q-card-actions vertical>
        <q-btn flat>Action 1</q-btn>
        <q-separator></q-separator>

        <div class="text-subtitle2" style="font-weight: bold">
          Pick your audience
          <p>Close Friends</p>
          <p>Custom Group</p>
          <!-- <p>blah</p> -->
        </div>

        <div class="q-pa-lg">
          <q-option-group
            v-model="group"
            :options="options"
            color="yellow"
            type="toggle"
          ></q-option-group>
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
      group: [ 'op1' ],
      options: [
        {
          label: 'Option 1',
          value: 'op1'
        },
        {
          label: 'Option 2',
          value: 'op2'
        },
        {
          label: 'Option 3',
          value: 'op3'
        }
      ]
    }
  }
})
}
</script>

<script>
<style lang="sass">
  // .q-header // .q-toolbar__title // font-size: 25px // font-weight: bold
</style>;
