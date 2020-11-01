<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Adaugare functionar</span>
        </v-card-title>
        <v-card-text>
          <v-text-field
            label="nume"
            v-model="name"
            solo
            required
          ></v-text-field>
          <v-text-field
            label="institutie"
            v-model="institution"
            solo
            required
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="$emit('close')" tile large>
            Close
          </v-btn>
          <v-btn color="primary" @click="$emit('close')" tile large>
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'AddClerk',
  props: {
    dialog: Boolean
  },
  data: () => ({
    name: '',
    institution: ''
  })
}
</script>
