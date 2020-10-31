<template>
  <div>
    <h1>Institutions</h1>
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="institution in institutions"
          :key="institution.id"
          :cols="4"
        >
          <Institution :model="institution"/>
        </v-col>
      </v-row>

      <v-btn color="primary" fab large dark @click="add">
        <v-icon>mdi-plus</v-icon>
      </v-btn>

      <AddInstitution :dialog="addDialog" @close="closeAddDialog"/>
    </v-container>
  </div>
</template>

<script>
import Institution from '@/components/Institution'
import AddInstitution from '@/components/AddInstitution'

export default {
  name: 'Institutions',
  components: {
    Institution,
    AddInstitution
  },
  data: () => ({
    addDialog: false,
    institutions: [
      { id: '1', initial: 'I1', name: 'Institutie 1', address: 'Str. Strada, Nr. 10, Sector 1, Bucuresti' },
      { id: '2', initial: 'I2', name: 'Institutie 2', address: 'Str. Strada, Nr. 10, Sector 1, Bucuresti' },
      { id: '3', initial: 'I3', name: 'Institutie 3', address: 'Str. Strada, Nr. 10, Sector 1, Bucuresti' },
      { id: '4', initial: 'I4', name: 'Institutie 4', address: 'Str. Strada, Nr. 10, Sector 1, Bucuresti' },
      { id: '5', initial: 'I5', name: 'Institutie 5', address: 'Str. Strada, Nr. 10, Sector 1, Bucuresti' }
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
