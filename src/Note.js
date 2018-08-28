import Api from './api'
let api = new Api()


class Note {
  constructor (properties) {
    this.title = properties.title
    this.text = properties.text
    this.id = properties.id || properties._id
    this.tags = properties.tags || []
    this.updated = properties.updated || null
  }

  static getAll () {
    return api.get().then(response => {
      let notes = response.body.notes
      return notes.map(noteData => new Note(noteData))
    })
  }

  create () {
    return api.post()
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
    return api.put(this.id)
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

  delete () {
    if (!this.id) return
    return api.delete(this.id)
      .then(response => {
        this.id = null
      })
  }
}

export default Note
