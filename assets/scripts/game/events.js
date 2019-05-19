'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const logic = require('./logic.js')
console.log('API method' + api.newGame)
console.log('ui method' + ui.onNewGameSuccess)

const onButtonClick = event => {
  console.log(event.target.id)
  logic.makeMove(event.target.id)
}

const onNewGameClick = event => {
  event.preventDefault()

  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

module.exports = {
  onButtonClick,
  onNewGameClick
}
