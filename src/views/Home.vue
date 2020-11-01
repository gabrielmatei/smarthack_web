<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted () {
    if (this.user.role === 'admin') {
      this.$router.push('/institutions')
    } else if (this.user.role === 'supervisor') {
      this.$router.push('/clerks')
    } else if (this.user.role === 'clerk') {
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
