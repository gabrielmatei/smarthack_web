<template>
    <v-dialog
      v-model="show"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <Loader v-if="loading"/>
      <v-card v-if="request">
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{request.requestedDocumentTemplate.name}} -  {{request.requester.lastName}} {{request.requester.firstName}}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="prev">
              <v-icon>mdi-chevron-left</v-icon>
              Prev
            </v-btn>
            <v-btn dark text @click="next">
              Next
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-container fluid>
          <v-row>
            <v-col>
              Status: {{request.requestStatus}}
            </v-col>
          </v-row>
          <v-row v-if="generatedPdfFromFieldsMap">
            <h3>Document generat</h3>
            <v-col offset="4" cols="4">
              <pdf
              style="border: 1px solid black"
              v-for="i in pdf.pageCount" :key="`pdf-page-${i}`"
              :src="pdf.src"
              :page="i"
              class="pdf-page"
            />
            </v-col>
          </v-row>
           <v-row v-else>
            <v-col>
              <h3>Campuri completate</h3>
              <v-row v-for="field in Object.keys(fields)" :key="field">
                <v-col cols="2">
                  {{field}}
                </v-col>
                <v-col cols="3">
                  <v-text-field
                    v-model="fields[field]"
                    label="Solo"
                    solo
                    disabled
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <!-- <v-row>
            <v-col>
              <h3>Documente necesare</h3>
              {{request.requiredDocuments}}
            </v-col>
          </v-row> -->
          <v-row>
            <v-col>
              <v-btn color="success" width="100%" height="70" @click="accept">
                Accepta
              </v-btn>
            </v-col>
            <v-col>
              <v-btn color="error" width="100%" height="70" @click="reject">
                Refuza
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

      </v-card>
    </v-dialog>
</template>

<script>
import pdf from 'vue-pdf'
import Loader from '@/components/Loader'
import RequestService from '@/services/request'

export default {
  name: 'Request',
  components: {
    pdf,
    Loader
  },
  props: {
    show: Boolean,
    request: Object
  },
  data: () => ({
    loading: false,
    pdf: {
      pageCount: undefined,
      src: undefined
    }
  }),
  watch: {
    'request.generatedPdfFromFieldsMap': function () {
      if (!this.request.generatedPdfFromFieldsMap) {
        return
      }
      this.pdf.src = pdf.createLoadingTask('data:application/pdf;base64,' + this.request.generatedPdfFromFieldsMap)
      this.pdf.src.promise.then(pdf => {
        this.loaderMessage = ''
        this.pdf.pageCount = pdf.numPages
      })
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    prev () {
      this.$emit('prev')
    },
    next () {
      this.$emit('next')
    },
    accept () {
      this.confirmRequest(true)
    },
    reject () {
      this.confirmRequest(false)
    },
    confirmRequest (confirm) {
      this.loading = true
      const statuses = {}
      if (!confirm) {
        statuses[`${Object.keys(this.fields)[0]}`] = 'test'
      }
      const payload = {
        requestId: this.request.id,
        statuses
      }
      RequestService.response(payload).then(
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
  },
  computed: {
    fields () {
      return this.request.completedFieldsMap
    }
  }
}
</script>
