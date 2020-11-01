<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <Loader v-if="loading"/>
      <v-card v-else>
        <v-card-title>
          <span class="headline">Adaugare sablon document</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="nume"
                  v-model="name"
                  solo
                  required
                />
              </v-col>
              <v-col cols="12">
                <input type="file" ref="file" id="customFile"
                               v-on:change="handleFileUpload($event)"
                               enctype="multipart/form-data">
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="$emit('close')" tile large>
            Close
          </v-btn>
          <v-btn color="primary" @click="save" tile large>
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Loader from '@/components/Loader'
import DocService from '@/services/docs'

export default {
  name: 'AddDoc',
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
    message: 'Hello Vue!',
    singleFile: '',
    refFile: '',
    chosenFile: 'Chose file'
  }),
  methods: {
    handleFileUpload (event) {
      this.singleFile = event.target.files[0]
      this.chosenFile = this.singleFile.name
    },
    save () {
      const formData = new FormData()
      formData.append('name', this.name)
      // formData.append('institutionId', 1)
      formData.append('file', this.singleFile)

      this.loading = true
      DocService.create(formData).then(
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
