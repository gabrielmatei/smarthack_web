import axios from 'axios'

const url = 'https://smarthack-backend.herokuapp.com'

class RequestService {
  getHeader (protect = false) {
    const headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    }

    if (protect) {
      headers.Authorization = localStorage.getItem('token')
    }

    return { headers }
  }

  async getAll () {
    return axios
      .get(`${url}/requests`, this.getHeader(true))
      .then(res => ({
        status: res.status,
        data: res.data
      }))
      .catch(error => {
        console.error('RequestService:', error)
        return {
          status: error.response ? error.response.status : 500
        }
      })
  }
}

export default new RequestService()
