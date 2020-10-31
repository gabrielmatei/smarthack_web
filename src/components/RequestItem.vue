<template>
  <tr>
    <td>{{request.id}}</td>
    <td>{{request.name}}</td>
    <td>{{request.status}}</td>
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
