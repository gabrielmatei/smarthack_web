<template>
  <div>
    <h1>Home</h1>
    <RequestList/>
  </div>
</template>

<script>
import RequestList from '@/components/RequestList'

export default {
  name: 'Home',
  components: {
    RequestList
  }
}
</script>
