'use strict'

const store = require('../store')
const ui = require('./ui')

const makeMove = function (id) {
  ui.clearMessage()
  const winningMoves = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  let token = ''
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
    const first = store.game.cells[threeIndices[0]] // 'o'
    const second = store.game.cells[threeIndices[1]] // 'o'
    const third = store.game.cells[threeIndices[2]] // 'o'

    if (first === second && second === third && first !== '') {
      ui.displayWinner(token)
      return true
    } else if (store.game.move === 8) {
      ui.declareDraw()
      return true
    }
  }
  store.game.move++
}

module.exports = {
  makeMove
}
