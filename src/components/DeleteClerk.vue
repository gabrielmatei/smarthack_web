<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Stergere functionar</span>
        </v-card-title>
        <v-card-text>
          Sterge functionarul {{model.name}}?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="$emit('close')">
            Inchide
          </v-btn>
          <v-btn color="error" @click="$emit('close')">
            Sterge
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'DeleteClerk',
  props: {
    dialog: Boolean,
    model: Object
  },
  data: () => ({
    name: ''
  })
}
</script>
