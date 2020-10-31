<template>
  <div class="login">
    <h1>Login</h1>
    <v-form>
      <v-text-field
        v-model="email"
        label="email"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="password"
        required
      ></v-text-field>
      <v-btn @click="login">
        Log in
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    login () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
