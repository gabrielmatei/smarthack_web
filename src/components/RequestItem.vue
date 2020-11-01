<template>
  <tr>
    <td>{{request.id}}</td>
    <td>{{request.requester.lastName}} {{request.requester.firstName}}</td>
    <td>{{request.requestedDocumentTemplate.name}}</td>
    <td>{{request.institution.abreviation}}</td>
    <td>{{request.requestStatus}}</td>
    <td>
      <v-btn
        color="primary"
        @click="options.openRequest(index, request)"
      >
        Vezi cerere
      </v-btn>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'RequestItem',
  props: {
    index: Number,
    request: Object,
    options: Object
  }
}
</script>
