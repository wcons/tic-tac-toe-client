'use strict'

const config = require('../config')
const store = require('../store')

const newGame = () => {
  console.log('from api newGame')

  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGame
}
