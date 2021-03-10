<template>
  <q-page class="flex flex-center">
    <div>
      <profile-header></profile-header>
    </div>
    <h5>Profile Page</h5>
  </q-page>
</template>

<script>
import ProfileHeader from '../components/ProfileHeader.vue';
export default {
  name: 'PageProfile',
  components: {
    ProfileHeader
  }
}
</script>
