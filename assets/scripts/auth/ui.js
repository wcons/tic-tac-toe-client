'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onSignUpFailure = responseData => {
  $('#message').text('Sign up failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onSignInSuccess = responseData => {
  $('#message').text('Signed in successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')

  store.user = responseData.user
  console.log('store is', store)
}

const onSignInFailure = responseData => {
  $('#message').text('Sign in failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onChangePasswordSuccess = responseData => {
  $('#message').text('Changed Password Successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
}
const onChangePasswordFailure = responseData => {
  $('#message').text('Change Password Failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure

}
