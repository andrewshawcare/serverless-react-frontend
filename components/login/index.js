import React from 'react'

export default ({ title, description, phoneNumber = {}, pin = {}, submitAction = {} } = {}) => {
  const {
    value: phoneNumberValue = '',
    onChange: phoneNumberOnChange = () => {}
  } = phoneNumber
  const {
    value: pinValue = '',
    onChange: pinOnChange = () => {},
    resetAction: pinResetAction = {}
  } = pin
  const {
    title: pinResetActionTitle = '',
    onChange: pinResetActionOnChange = () => {}
  } = pinResetAction
  const {
    title: submitActionTitle = '',
    onChange: submitActionOnChange
  } = submitAction
  return React.createElement(
    'div',
    { className: 'login' },
    React.createElement('h1', { className: 'title' }, title),
    React.createElement('p', { className: 'description' }, description),
    React.createElement(
      'div',
      { className: 'phone-number' },
      React.createElement('input', { className: 'input', type: 'tel', value: phoneNumberValue, onChange: phoneNumberOnChange })
    ),
    React.createElement(
      'div',
      { className: 'pin' },
      React.createElement('input', { className: 'input', type: 'password', value: pinValue, onChange: pinOnChange }),
      React.createElement('a', { className: 'reset action', onChange: pinResetActionOnChange }, pinResetActionTitle)
    ),
    React.createElement('a', { className: 'submit action', onChange: submitActionOnChange }, submitActionTitle)
  )
}
