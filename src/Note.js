import request from 'superagent'

class Note {
  constructor (props) {
    this.title = props.title
    this.text = props.text
    this.id = props.id
    this.tags = props.tags || []
    this.updated = null
  }

  create () {
    return request.post('https://notes-api.glitch.me/api/notes')
      .auth('AlexCorey', 'Uncw1234')
      .send({
        title: this.title,
        text: this.text,
        tags: this.tags
      })
      .then(response => {
        this.id = response.body._id
        this.updated = response.body.updated
        return response.body
      })
  }

  update () {
    if (!this.id) return
    return request.put(`https://notes-api.glitch.me/api/notes/${this.id}`)
      .auth('AlexCorey', 'Uncw1234')
      .send({
        title: this.title,
        text: this.text,
        tags: this.tags
      })
      .then(response => {
        this.updated = response.body.updated
        return response.body
      })
  }
}

export default Note
