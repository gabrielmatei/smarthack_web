<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app v-if="showNavigation">
      <Navigation />
      <template v-slot:append>
        <v-btn block color="error" @click="logout">
          Log out
        </v-btn>
      </template>
    </v-navigation-drawer>

    <v-app-bar app v-if="showNavigation">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Docs</v-toolbar-title>
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
    }
  }
}
</script>
