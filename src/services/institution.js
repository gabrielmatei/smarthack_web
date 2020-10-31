import axios from 'axios'

const url = 'https://smarthack-backend.herokuapp.com'

class InstitutionService {
  getHeader (protect = false) {
    const headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    }

    if (protect) {
      // headers.Authorization = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmciLCJleHAiOjE2MDQyMDYzNjgsImlhdCI6MTYwNDE3MDM2OH0.nZPdPVor6TMOdVRG145eDp53nXqQokGhYnD_Kh527vs'
      headers.Authorization = localStorage.getItem('token')
    }

    return {
      headers
    }
  }

  async getAll () {
    return axios
      .get(`${url}/institutions`, this.getHeader(true))
      .then(res => ({
        status: res.status,
        data: res.data
      }))
      .catch(error => {
        console.error('InstitutionService:', error)
        return {
          status: error.response ? error.response.status : 500
        }
      })
  }

  async create (payload) {
    return axios
      .post(`${url}/institutions`, payload, this.getHeader(true))
      .then(res => ({
        status: res.status,
        data: res.data
      }))
      .catch(error => {
        console.error('InstitutionService:', error)
        return {
          status: error.response ? error.response.status : 500
        }
      })
  }

  async delete (id) {
    return axios
      .delete(`${url}/institutions/${id}`, this.getHeader(true))
      .then(res => ({
        status: res.status,
        data: res.data
      }))
      .catch(error => {
        console.error('InstitutionService:', error)
        return {
          status: error.response ? error.response.status : 500
        }
      })
  }
}

export default new InstitutionService()
