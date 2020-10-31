<template>
  <div class="login">
    <Loader v-if="loading"/>
    <v-container v-else>
      <v-row>
        <v-col offset="3" cols="6">
          <v-alert v-if="error" type="error">{{error}}</v-alert>
          <h1>Login</h1>
          <v-form>
            <v-text-field
              v-model="username"
              label="username"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="password"
              type="password"
              required
            ></v-text-field>
            <v-btn @click="login" color="primary" width="100%">
              Log in
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import AuthService from '@/services/auth'

export default {
  name: 'Login',
  components: {
    Loader
  },
  data: () => ({
    loading: false,
    error: '',
    username: '',
    password: ''
  }),
  methods: {
    login () {
      this.loading = true
      const payload = {
        username: this.username,
        password: this.password
      }
      AuthService.login(payload).then(
        res => {
          console.log('res', res)
          this.loading = false
          if (res.status === 200) {
            localStorage.setItem('token', res.data.jwt)
            this.$router.push({ path: '/' })
          } else {
            this.error = 'A aparut o eroare!'
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
