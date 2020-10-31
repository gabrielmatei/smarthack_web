<template>
  <div>
    <h1>Requests</h1>
    <v-data-table
      :headers="headers"
      :items="requests"
      item-key="name"
      class="elevation-1"
      :search="search"
      :options="{ openRequest }"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search"
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

    <v-btn color="primary" @click="startRequests">
      Incepe verificarea
    </v-btn>

    <Request
      :show="dialog"
      :request="currentRequest"
      @close="dialog = false"
      @prev="prevRequest"
      @next="nextRequest"
    />
  </div>
</template>

<script>
import Request from '@/components/Request'
import RequestItem from '@/components/RequestItem'

export default {
  name: 'RequestList',
  components: {
    Request,
    RequestItem
  },
  data () {
    return {
      search: '',
      headers: [
        { text: '#', value: 'id' },
        { text: 'Nume si prenume', value: 'name' },
        { text: 'Status', value: 'status' },
        { text: '', value: 'action' }
      ],
      requests: [
        { id: '1', name: 'John Doe', status: 'pending' },
        { id: '2', name: 'John Smith', status: 'pending' }
      ],
      dialog: false,
      currentIndex: 0,
      currentRequest: undefined
    }
  },
  computed: {
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
