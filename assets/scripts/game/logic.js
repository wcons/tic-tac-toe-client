'use strict'
const api = require('./api')
const store = require('../store')
const ui = require('./ui')

const makeMove = function (id) {
  ui.clearMessage()
  const winningMoves = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  let token = ''
  if (store.game.over) {
    return false
  }

  if (store.game.move % 2 === 0) {
    token = 'x'
  } else {
    token = 'o'
  }
  if (store.game.cells[id] !== '') {
    ui.invalidMove()
    return false
  } else {
    store.game.cells[id] = token
  }
  ui.updateButton(id, token)
  for (let i = 0; i < winningMoves.length; i++) {
    const threeIndices = winningMoves[i]
    const first = store.game.cells[threeIndices[0]]
    const second = store.game.cells[threeIndices[1]]
    const third = store.game.cells[threeIndices[2]]

    if (first === second && second === third && first !== '') {
      store.game.over = true
      api.saveGame()
      ui.displayWinner(token)
      return true
    }
  }

  api.saveGame()
  store.game.move++

  if (store.game.over === false && store.game.move >= 9) {
    store.game.over = true
    api.saveGame()
    ui.declareDraw()
    return true
  }
}

module.exports = {
  makeMove
}
