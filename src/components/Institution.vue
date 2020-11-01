<template>
  <v-card>
    <v-avatar tile color="brown" size="56" height="130px" style="width: 100%">
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

    <EditInstitution :model="model" :dialog="editDialog" @close="closeEditDialog"/>
    <DeleteInstitution :model="model" :dialog="deleteDialog" @close="closeDeleteDialog"/>
  </v-card>
</template>

<script>
import EditInstitution from '@/components/EditInstitution'
import DeleteInstitution from '@/components/DeleteInstitution'

export default {
  name: 'Institution',
  components: {
    EditInstitution,
    DeleteInstitution
  },
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
