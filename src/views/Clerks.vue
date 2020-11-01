<template>
  <div>
    <Loader v-if="loading"/>
    <v-container fluid v-else>
      <h1>Utilizatori</h1>
      <br/>
      <v-data-table
        :headers="headers"
        :items="users"
        item-key="id"
        class="elevation-1"
        :search="search"
      >
        <template v-slot:top>
          <v-text-field
            solo
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

      <v-btn color="primary" fab large dark @click="add" class="floating-button">
        <v-icon>mdi-plus</v-icon>
      </v-btn>

      <AddClerk :dialog="addDialog" @close="closeAddDialog"/>
    </v-container>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import Clerk from '@/components/Clerk'
import AddClerk from '@/components/AddClerk'
import UserService from '@/services/user'

export default {
  name: 'Clerks',
  components: {
    Loader,
    Clerk,
    AddClerk
  },
  data: () => ({
    loading: false,
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
    users: []
  }),
  mounted () {
    this.loading = true
    UserService.getAll().then(
      res => {
        console.log('res', res)
        this.loading = false
        this.users = res.data
      },
      error => {
        console.error('err', error)
        this.loading = false
      }
    )
  },
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
