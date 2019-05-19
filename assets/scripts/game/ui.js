'use strict'

const store = require('../store')

const onNewGameSuccess = function (responseData) {
  $('#message').text('Created New Game!')
  $('#message').removeClass()
  $('#message').addClass('success')
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

module.exports = {
  onNewGameSuccess,
  onNewGameFailure
}
