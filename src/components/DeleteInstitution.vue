<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Stergere {{model.name}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <p>Introdu numele institutiei pentru a o sterge</p>
                <v-text-field
                  label="nume"
                  v-model="name"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="$emit('close')">
            Inchide
          </v-btn>
          <v-btn color="primary" @click="$emit('close')">
            Sterge
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'EditInstitution',
  props: {
    dialog: Boolean,
    model: Object
  },
  data: () => ({
    name: ''
  })
}
</script>
