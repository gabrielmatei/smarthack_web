<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app v-if="showNavigation">
      <Navigation />
      <template v-slot:append>
        <v-btn block color="error" @click="logout" tile large>
          Iesire
        </v-btn>
      </template>
    </v-navigation-drawer>

    <v-app-bar app v-if="showNavigation" color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- <v-toolbar-title>{{user.institution.name}}</v-toolbar-title> -->
    </v-app-bar>

    <v-main class="ma-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  },
  data: () => ({
    drawer: null
  }),
  methods: {
    logout () {
      this.drawer = !this.drawer
      localStorage.setItem('token', '')
      this.$router.push({ path: '/login' })
    }
  },
  computed: {
    showNavigation () {
      return !['/login'].includes(this.$route.path)
    },
    user () {
      return JSON.parse(localStorage.getItem('user'))
    }
  }
}
</script>

<style>
  @import './assets/style.css';
</style>
