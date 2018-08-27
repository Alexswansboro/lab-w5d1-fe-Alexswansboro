import Note from './src/Note'

let note = new Note({
  title: 'Test note',
  text: 'Sample text'
})

note.create().then(noteBody => {
  console.log(noteBody)
})
