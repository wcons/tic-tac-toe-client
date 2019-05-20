'use strict'

const store = require('../store')

const onNewGameSuccess = function (responseData) {
  $('#message').text('Created New Game!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.gameboard button').text('')
  store.game = responseData.game
  store.game.move = 0
  console.log('store is', store)
  console.log(responseData)
}

const onNewGameFailure = function (responseData) {
  $('#message').text('Failed to create game!')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const clearMessage = function () {
  $('#message').text('')
}

const updateButton = function (id, token) {
  const buttonId = '#' + id
  $(buttonId).text(token)
}

const declareDraw = function () {
  $('#message').text('Game is a draw!')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const displayWinner = function (token) {
  $('#message').text('A winner is ' + token + '!!!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const invalidMove = function () {
  $('#message').text('Invalid Move!')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  updateButton,
  invalidMove,
  clearMessage,
  displayWinner,
  declareDraw
}
