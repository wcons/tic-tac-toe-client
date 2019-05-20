const gameBoard = ['', '', '', '', '', '', '', '', '']

let move = 0

const winningMoves = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

const makeMove = function (id) {
  let token = ''
  if (move % 2 === 0) {
    token = 'x'
  } else {
    token = 'o'
  }
  gameBoard[id] = token
  for (let i = 0; i < winningMoves.length; i++) {
    // i = 3
    let threeIndices = winningMoves[i] // -> [0,3,6]
    //
    // [
    //   0 => 0,
    //   1 => 3,
    //   2 => 6
    // ]
    //threeIndices[0]  === 0
    let first = gameBoard[threeIndices[0]] // 'o'
    let second = gameBoard[threeIndices[1]]//'o'
    let third = gameBoard[threeIndices[2]]//'o'

    if (first === second && second === third && first !== '') {
      console.log('Winner!')
      return true
    }
  }
  move++
}

module.export = {
  makeMove
}

makeMove(1)
console.log(gameBoard)
