<template>
  <div>
    <h1>Clerks</h1>

    <v-data-table
      :headers="headers"
      :items="clerks"
      item-key="id"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search"
        ></v-text-field>
      </template>
      <template v-slot:body="{ items }">
        <tbody>
          <Clerk
            v-for="item in items" :key="item.id"
            :clerk="item"
          />
        </tbody>
      </template>
    </v-data-table>

    <v-btn color="primary" fab large dark @click="add">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <AddClerk :dialog="addDialog" @close="closeAddDialog"/>
  </div>
</template>

<script>
import Clerk from '@/components/Clerk'
import AddClerk from '@/components/AddClerk'

export default {
  name: 'Clerks',
  components: {
    Clerk,
    AddClerk
  },
  data: () => ({
    addDialog: false,
    search: '',
    headers: [
      { text: '#', value: 'id' },
      { text: '', value: 'avatar' },
      { text: 'Nume si prenume', value: 'name' },
      { text: 'Institutia', value: 'institution' },
      { text: 'Rol', value: 'role' },
      { text: '', value: 'action' }
    ],
    clerks: [
      { id: '1', avatar: 'PI', name: 'Popescu Ion', institution: 'ANAF', role: 'admin' },
      { id: '2', avatar: 'RI', name: 'Radu Ionescu', institution: 'ONRC', role: 'admin' }
    ]
  }),
  methods: {
    add () {
      this.addDialog = true
    },
    closeAddDialog () {
      this.addDialog = false
    }
  }
}
</script>
