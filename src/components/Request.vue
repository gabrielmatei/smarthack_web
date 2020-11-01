<template>
    <v-dialog
      v-model="show"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card v-if="request">
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{request.name}}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="prev">
              <v-icon>mdi-chevron-left</v-icon>
              Prev
            </v-btn>
            <v-btn dark text @click="next">
              Next
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-container fluid>
          <v-row>
            <v-col>
              Documente
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn color="success" width="100%" height="70" @click="accept">
                Accepta
              </v-btn>
            </v-col>
            <v-col>
              <v-btn color="error" width="100%" height="70" @click="reject">
                Refuza
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'Request',
  props: {
    show: Boolean,
    request: Object
  },
  methods: {
    close () {
      this.$emit('close')
    },
    prev () {
      this.$emit('prev')
    },
    next () {
      this.$emit('next')
    },
    accept () {

    },
    reject () {

    }
  }
}
</script>
