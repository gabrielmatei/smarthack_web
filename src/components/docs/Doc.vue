<template>
  <v-card>
    <v-avatar tile color="brown" size="56" height="200px" style="width: 100%">
      <span class="white--text headline">{{model.abreviation}}</span>
    </v-avatar>

    <v-card-title>{{model.name}}</v-card-title>

    <v-card-text>{{model.address}}</v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon @click="edit">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn icon @click="remove">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>

    <!-- <EditDoc :model="model" :dialog="editDialog" @close="closeEditDialog"/>
    <DeleteDoc :model="model" :dialog="deleteDialog" @close="closeDeleteDialog"/> -->
  </v-card>
</template>

<script>
// import EditDoc from '@/components/docs/EditDoc'
// import DeleteDoc from '@/components/docs/DeleteDoc'

export default {
  name: 'Doc',
  // components: {
  //   EditDoc,
  //   DeleteDoc
  // },
  props: {
    model: Object
  },
  data: () => ({
    editDialog: false,
    deleteDialog: false
  }),
  methods: {
    edit () {
      this.editDialog = true
    },
    remove () {
      this.deleteDialog = true
    },
    closeEditDialog () {
      this.editDialog = false
    },
    closeDeleteDialog () {
      this.deleteDialog = false
    }
  }
}
</script>
