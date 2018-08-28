import { createElement, getID, createNoteDom } from './utilities'
class NoteDom {
  constructor () {
    let noteData = {
      title: getID('input-note-title').value,
      text: getID('input-text-field').value,
      tags: getID('input-tag-field').value
    }
    let note = new Note (noteData)
  }

  eventListener () {
    getID('submit-button').addEventListener('click', event => {
      event.preventDefault()
      let note = {
        title: getID('')
      }
      createNoteDom()
    })
  }
}

export default NoteDom
