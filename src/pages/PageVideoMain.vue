<template>
  <q-page class="flex flex-center">
    <live-header></live-header>
    <h5>Live Video Page</h5>
  </q-page>
</template>

<script>
import LiveHeader from '../components/LiveHeader.vue'
export default {
  name: 'PageVideoMain',
  components: {
    LiveHeader
  }
}
</script>