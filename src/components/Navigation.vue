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
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Vizualizare cereri</v-list-item-title>
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
