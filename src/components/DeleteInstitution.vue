<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <Loader v-if="loading"/>
      <v-card v-else>
        <v-card-title>
          <span class="headline">Sterge institutia {{model.name}}</span>
        </v-card-title>
        <v-card-text>
          <p>Introdu numele institutiei pentru a o sterge</p>
          <v-text-field
            label="nume"
            v-model="name"
            solo
            required
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text tile large @click="$emit('close')">
            Inchide
          </v-btn>
          <v-btn color="error" tile large @click="remove">
            Sterge
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
  name: 'DeleteInstitution',
  components: {
    Loader
  },
  props: {
    dialog: Boolean,
    model: Object
  },
  data: () => ({
    loading: false,
    name: ''
  }),
  methods: {
    remove () {
      if (this.name !== this.model.name) {
        return
      }

      this.loading = true
      InstitutionService.delete(this.model.id).then(
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
