<template>
  <div>
    <Loader v-if="loading"/>
    <v-container fluid v-else>
      <h1>Documente</h1>

      <v-text-field
        label="Cauta"
        v-model="search"
      />

      <v-row dense>
        <v-col
          v-for="doc in searchFilter"
          :key="doc.id"
          :cols="4"
        >
          <Doc :model="doc"/>
        </v-col>
      </v-row>

      <v-btn color="primary" fab large dark @click="add">
        <v-icon>mdi-plus</v-icon>
      </v-btn>

      <AddDoc :dialog="addDialog" @close="closeAddDialog"/>
    </v-container>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import Doc from '@/components/docs/Doc'
import AddDoc from '@/components/docs/AddDoc'
import DocsService from '@/services/docs'

export default {
  name: 'Institutions',
  components: {
    Loader,
    Doc,
    AddDoc
  },
  data: () => ({
    loading: false,
    addDialog: false,
    search: '',
    docs: []
  }),
  mounted () {
    this.loading = true
    DocsService.getAll().then(
      res => {
        console.log('res', res)
        this.loading = false
        this.docs = res.data
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
      return this.docs
    }
  }
}
</script>
