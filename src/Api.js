import request from 'superagent'

class Api {
  constructor () {
    this.username = 'AlexCorey'
    this.password = 'Uncw1234'
    this.baseUrl = 'https://notes-api.glitch.me/api/notes'
  }

  get () {
    return request.get(this.baseUrl).auth(this.username, this.password)
  }

  post () {
    return request.post(this.baseUrl).auth(this.username, this.password)
  }

  put (id) {
    return request.post(`${this.baseUrl}/${id}`).auth(this.username, this.password)
  }

  delete (id) {
    return request.post(`${this.baseUrl}/${id}`).auth(this.username, this.password)
  }
}

export default Api
