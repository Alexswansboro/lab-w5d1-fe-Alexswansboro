
export function createElement (tag) {
  document.createElement(tag)
}
export function getID (id) {
  return document.getElementById(id)
}
export function createNoteDom (note) {
  const getUL = getID('ul')
  const noteLi = createElement('li')
  noteLi.classList.add('single-note')
  noteLi.innerHTML = '<h3>note.title</h3><p>note.text</p><p>note.tags</p>'
  getUL.appendChild(noteLi)
}
