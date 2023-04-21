<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-primary text-white">

        <q-item clickable to="/Home">
          <q-avatar>
            <img src="~assets/grave keeper emble.png">
          </q-avatar>
        </q-item>

        <q-toolbar-title>
          <q-list dark>
            <q-item-section>
              <q-item-label>GraveKeeper</q-item-label>
              <q-item-label caption>Official Site</q-item-label>
            </q-item-section>
          </q-list>
        </q-toolbar-title>

        <q-btn rounded label="Home" to="/Home"/>

        <q-btn rounded label="Music" to="/Music"/>

        <q-btn rounded label="Literature" to="/Literature"/>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
    }
  },
  methods: {
    openURL
  }
}
</script>
