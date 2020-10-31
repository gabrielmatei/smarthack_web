import axios from 'axios'

const url = 'https://smarthack-backend.herokuapp.com'

class AuthService {
  async login (payload) {
    return axios
      .post(`${url}/authenticate`, payload)
      .then(res => ({
        status: res.status,
        data: res.data
      }))
      .catch(error => {
        console.error('AuthService:', error)
        return {
          status: error.response ? error.response.status : 500
        }
      })
  }
}

export default new AuthService()
