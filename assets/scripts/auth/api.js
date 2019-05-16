'use strict'

const config = require('../config')

const signUp = formData => {
  console.log('from api signUp')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  signUp

}
