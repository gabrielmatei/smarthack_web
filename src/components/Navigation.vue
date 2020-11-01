<template>
  <div>
    <v-list>
      <v-list-item class="px-2">
        <v-avatar color="brown">
          <span class="white--text headline">PI</span>
        </v-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="title">{{user.lastName}} {{user.firstName}}</v-list-item-title>
          <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list>
      <v-list-item to="/institutions" v-if="user.role === 'admin'">
        <v-list-item-icon>
          <v-icon>mdi-domain</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Institutii</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/clerks" v-if="user.role === 'admin' || user.role === 'supervisor'">
        <v-list-item-icon>
          <v-icon>mdi-account-multiple</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Utilizatori</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/requests" v-if="user.role === 'clerk'">
        <v-list-item-icon>
          <v-icon>mdi-file</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Cereri</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/docs" v-if="user.role === 'supervisor' || user.role === 'clerk'">
        <v-list-item-icon>
          <v-icon>mdi-file-document-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Sabloane documente</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  computed: {
    user () {
      const user = JSON.parse(localStorage.getItem('user'))
      return user
    }
  }
}
</script>
