<template>
  <tr>
    <td>{{clerk.id}}</td>
    <td>
      <v-avatar color="brown" size="36">
        <span class="white--text headline">A</span>
      </v-avatar>
    </td>
    <td>{{clerk.lastName}} {{clerk.firstName}}</td>
    <td>{{clerk.institution ? clerk.institution.name : '-'}}</td>
    <td>{{clerk.role}}</td>
    <td>
      <v-btn color="primary" @click="edit" tile small style="margin-right: 10px">
        <v-icon left>mdi-pencil</v-icon>
        Editeaza
      </v-btn>
      <v-btn color="error" @click="remove" tile small>
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
