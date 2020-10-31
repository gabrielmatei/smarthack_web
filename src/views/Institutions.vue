<template>
  <div>
    <Loader v-if="loading"/>
    <v-container fluid v-else>
      <h1>Institutions</h1>

      <v-text-field
        label="Cauta"
        v-model="search"
      />

      <v-row dense>
        <v-col
          v-for="institution in searchFilter"
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
import Loader from '@/components/Loader'
import Institution from '@/components/Institution'
import AddInstitution from '@/components/AddInstitution'
import InstitutionService from '@/services/institution'

export default {
  name: 'Institutions',
  components: {
    Loader,
    Institution,
    AddInstitution
  },
  data: () => ({
    loading: false,
    addDialog: false,
    search: '',
    institutions: []
  }),
  mounted () {
    this.loading = true
    InstitutionService.getAll().then(
      res => {
        console.log('res', res)
        this.loading = false
        this.institutions = res.data
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
  },
  computed: {
    searchFilter () {
      if (this.search) {
        return this.institutions.filter(i => i.name.toLowerCase().includes(this.search))
      }
      return this.institutions
    }
  }
}
</script>
