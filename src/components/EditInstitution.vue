<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <Loader v-if="loading"/>
      <v-card v-else>
        <v-card-title>
          <span class="headline">Editare {{model.name}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="abreviation"
                  v-model="model.abreviation"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="nume"
                  v-model="model.name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="adresa"
                  v-model="model.address"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="$emit('close')">
            Close
          </v-btn>
          <v-btn color="primary" @click="save">
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
  name: 'EditInstitution',
  components: {
    Loader
  },
  props: {
    dialog: Boolean,
    model: Object
  },
  data: () => ({
    loading: false
  }),
  methods: {
    save () {
      this.loading = true
      const payload = {
        abreviation: this.model.abreviation,
        name: this.model.name,
        address: this.model.address
      }
      InstitutionService.edit(this.model.id, payload).then(
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
