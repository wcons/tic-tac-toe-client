'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const logic = require('./logic.js')

const onButtonClick = event => {
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
