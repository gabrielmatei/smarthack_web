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
              Prev
            </v-btn>
            <v-btn dark text @click="next">
              Next
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader >
          <v-subheader>Documente</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Carte de idenittate</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Certificat de nastere</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-btn color="success">
          Accepta
        </v-btn>
        <v-btn color="error">
          Refuza
        </v-btn>
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
    }
  }
}
</script>
