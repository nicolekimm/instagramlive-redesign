<template>
  <q-page class="constrain q-pa-md">
    <div>
      <profile-header></profile-header>
    </div>
      <div class="row">
      <q-item> 

        <q-item-section avatar class="col-6">
          <q-avatar
            size="90px"
          >
            <q-img
              src="../images/janedoe.jpg"
            >
            </q-img>
          </q-avatar>
        </q-item-section>

        <q-item-section class="col-3">
          <q-item-label>6</q-item-label>
          <q-item-label caption>Following</q-item-label>
        </q-item-section>
        <q-item-section class="col-3">
          <q-item-label>800</q-item-label>
          <q-item-label caption>Followers</q-item-label>
        </q-item-section>
        <q-item-section class="col-3">
          <q-item-label>700</q-item-label>
          <q-item-label caption>Following</q-item-label>
        </q-item-section>
      </q-item>
      </div>
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
