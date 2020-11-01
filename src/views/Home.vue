<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted () {
    if (this.user.role === 'ROLE_SUPERVISOR') {
      this.$router.push('/institutions')
    } else if (this.user.role === 'ROLE_INSTITUTION_ADMIN') {
      this.$router.push('/requests')
    }
  },
  computed: {
    user () {
      const user = JSON.parse(localStorage.getItem('user'))
      return user
    }
  }
}
</script>
