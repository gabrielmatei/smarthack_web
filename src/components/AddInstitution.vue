<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <Loader v-if="loading"/>
      <v-card v-else>
        <v-card-title>
          <span class="headline">Adaugare o institutie noua</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-text-field
              label="abreviere"
              v-model="abreviation"
              solo
              required
            ></v-text-field>
            <v-text-field
              label="nume"
              v-model="name"
              solo
              required
            ></v-text-field>
            <v-text-field
              label="adresa"
              v-model="address"
              solo
              required
            ></v-text-field>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text large @click="$emit('close')">
            Close
          </v-btn>
          <v-btn color="primary" @click="save" large tile>
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Loader from '@/components/Loader'
import InstitutionService from '@/services/institution'

export default {
  name: 'AddInstitution',
  components: {
    Loader
  },
  props: {
    dialog: Boolean
  },
  data: () => ({
    loading: false,
    abreviation: '',
    name: '',
    address: ''
  }),
  methods: {
    save () {
      this.loading = true
      const payload = {
        abreviation: this.abreviation,
        name: this.name,
        address: this.address
      }
      InstitutionService.create(payload).then(
        res => {
          console.log('res', res)
          this.loading = false
          if (res.status === 200) {
            this.$emit('close')
          }
        },
        error => {
          console.error('err', error)
          this.loading = false
        }
      )
    }
  }
}
</script>
