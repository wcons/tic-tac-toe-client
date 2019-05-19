'use strict'

const store = require('../store')

const makeMove = function (id) {

console.log(store.game)
  const winningMoves = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  let token = ''
  if (store.game.move % 2 === 0) {
    token = 'x'
  } else {
    token = 'o'
  }
  store.game.cells[id] = token
  for (let i = 0; i < winningMoves.length; i++) {
    // i = 3
    const threeIndices = winningMoves[i] // -> [0,3,6]
    //
    // [
    //   0 => 0,
    //   1 => 3,
    //   2 => 6
    // ]
    // threeIndices[0]  === 0
    const first = store.game.cells[threeIndices[0]] // 'o'
    const second = store.game.cells[threeIndices[1]] // 'o'
    const third = store.game.cells[threeIndices[2]] // 'o'

    if (first === second && second === third && first !== '') {
      console.log('Winner!')
      return true
    }
  }
  store.game.move++
}

module.exports = {
  makeMove
}
