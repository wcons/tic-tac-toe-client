'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up input.formclear').val('')
}

const onSignUpFailure = responseData => {
  $('#message').text('Sign up failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#sign-up input.formclear').val('')
}

const onSignInSuccess = responseData => {
  $('#message').text('Signed in successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in input.formclear').val('')
  store.user = responseData.user
  $('.hidden').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  console.log('store is', store)
}

const onSignInFailure = responseData => {
  $('#message').text('Sign in failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#sign-in input.formclear').val('')
}

const onChangePasswordSuccess = responseData => {
  $('#message').text('Changed Password Successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-pw input.formclear').val('')
}
const onChangePasswordFailure = responseData => {
  $('#message').text('Change Password Failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#change-pw input.formclear').val('')
}

const onSignOutSuccess = responseData => {
  $('#message').text('Signed Out Successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.hidden').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('.gameboard button').text('')
}

const onSignOutFailure = responseData => {
  $('#message').text('Sign Out Failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure

}
