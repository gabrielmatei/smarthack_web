import axios from 'axios'

const url = 'https://smarthack-backend.herokuapp.com'

class DocsService {
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
      .get(`${url}/documentTemplates`, this.getHeader(true))
      .then(res => ({
        status: res.status,
        data: res.data
      }))
      .catch(error => {
        console.error('DocsService:', error)
        return {
          status: error.response ? error.response.status : 500
        }
      })
  }

  async create (payload) {
    return axios
      .post(`${url}/documentTemplates`, payload, this.getHeader(true))
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

  // async edit (id, payload) {
  //   return axios
  //     .put(`${url}/institutions/${id}`, payload, this.getHeader(true))
  //     .then(res => ({
  //       status: res.status,
  //       data: res.data
  //     }))
  //     .catch(error => {
  //       console.error('InstitutionService:', error)
  //       return {
  //         status: error.response ? error.response.status : 500
  //       }
  //     })
  // }

  // async delete (id) {
  //   return axios
  //     .delete(`${url}/institutions/${id}`, this.getHeader(true))
  //     .then(res => ({
  //       status: res.status,
  //       data: res.data
  //     }))
  //     .catch(error => {
  //       console.error('InstitutionService:', error)
  //       return {
  //         status: error.response ? error.response.status : 500
  //       }
  //     })
  // }
}

export default new DocsService()
