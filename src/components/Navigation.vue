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
          <v-list-item-title class="title">Popescu Ion</v-list-item-title>
          <v-list-item-subtitle>popescu.ion@ro-docs.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list>
      <v-list-item to="/institutions">
        <v-list-item-icon>
          <v-icon>mdi-domain</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Institutii</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/clerks">
        <v-list-item-icon>
          <v-icon>mdi-account-multiple</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Functionari</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/requests">
        <v-list-item-icon>
          <v-icon>mdi-file</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Cereri</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>
