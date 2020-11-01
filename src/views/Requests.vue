<template>
  <div>
    <Loader v-if="loading"/>
    <v-container fluid v-else>
      <h1>Cereri documente</h1>
      <br/>
      <v-data-table
        :headers="headers"
        :items="requests"
        item-key="id"
        class="elevation-1"
        :search="search"
        :options="{ openRequest }"
      >
        <template v-slot:top>
          <v-text-field
            v-model="search"
            solo
            label="Cauto o cerere"
          ></v-text-field>
        </template>
        <template v-slot:body="{ items, options }">
          <tbody>
            <RequestItem
              v-for="item in items" :key="item.id"
              :request="item"
              :options="options"
            />
          </tbody>
        </template>
      </v-data-table>

      <v-btn color="primary" x-large @click="startRequests" class="floating-button">
        <v-icon>mdi-file-search-outline</v-icon>
        Vezi toate cererile
      </v-btn>

      <Request
        :show="dialog"
        :request="currentRequest"
        @close="dialog = false"
        @prev="prevRequest"
        @next="nextRequest"
      />
    </v-container>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import Request from '@/components/Request'
import RequestItem from '@/components/RequestItem'
import RequestService from '@/services/request'

export default {
  name: 'RequestList',
  components: {
    Loader,
    Request,
    RequestItem
  },
  data () {
    return {
      loading: false,
      search: '',
      headers: [
        { text: '#', value: 'id' },
        { text: 'Nume si prenume', value: 'name' },
        { text: 'Document', value: 'doc' },
        { text: 'Institutie', value: 'institution' },
        { text: 'Status', value: 'status' },
        { text: '', value: 'action' }
      ],
      requests: [],
      dialog: false,
      currentIndex: 0,
      currentRequest: undefined
    }
  },
  mounted () {
    this.loading = true
    RequestService.getAll().then(
      res => {
        console.log('res', res)
        this.loading = false
        this.requests = res.data
      },
      error => {
        console.error('err', error)
        this.loading = false
      }
    )
  },
  methods: {
    startRequests () {
      this.dialog = true
      this.currentIndex = 0
      this.currentRequest = this.requests[this.currentIndex]
    },
    openRequest (index, request) {
      this.dialog = true
      this.currentRequest = request
    },
    prevRequest () {
      if (this.currentIndex <= 0) {
        return
      }
      this.currentIndex = this.currentIndex - 1
      this.currentRequest = this.requests[this.currentIndex]
    },
    nextRequest () {
      if (this.currentIndex >= this.requests.length - 1) {
        return
      }
      this.currentIndex = this.currentIndex + 1
      this.currentRequest = this.requests[this.currentIndex]
    }
  }
}
</script>
