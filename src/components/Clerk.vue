<template>
  <tr>
    <td>{{clerk.id}}</td>
    <td>
      <v-avatar color="brown">
        <span class="white--text headline">{{clerk.avatar}}</span>
      </v-avatar>
    </td>
    <td>{{clerk.name}}</td>
    <td>{{clerk.institution}}</td>
    <td>{{clerk.role}}</td>
    <td>
      <v-btn color="primary" @click="edit">
        <v-icon left>mdi-pencil</v-icon>
        Editeaza
      </v-btn>
      <v-btn color="error" @click="remove">
        <v-icon left>mdi-delete</v-icon>
        Sterge
      </v-btn>
    </td>

    <EditClerk :model="clerk" :dialog="editDialog" @close="closeEditDialog"/>
    <DeleteClerk :model="clerk" :dialog="deleteDialog" @close="closeDeleteDialog"/>
  </tr>
</template>

<script>
import EditClerk from '@/components/EditClerk'
import DeleteClerk from '@/components/DeleteClerk'

export default {
  name: 'Clerk',
  components: {
    EditClerk,
    DeleteClerk
  },
  props: {
    clerk: Object,
    options: Object
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
