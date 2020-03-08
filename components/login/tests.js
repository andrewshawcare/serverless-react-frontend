import ReactDOM from 'react-dom'
import assert from 'assert'
import LoginComponent from './index.js'

let containerElement

beforeEach(() => {
  containerElement = document.createElement('div')
  document.body.appendChild(containerElement)
})

describe('Login', () => {
  it('has a login class', () => {
    ReactDOM.render(LoginComponent(), containerElement)
    const loginComponent = containerElement.querySelector('.login')
    assert.ok(loginComponent instanceof HTMLElement)
  })

  it('has a title', () => {
    const title = 'Log in'
    ReactDOM.render(LoginComponent({ title }), containerElement)
    const titleComponent = containerElement.querySelector('.login .title')
    assert.strictEqual(titleComponent.textContent, title)
  })

  it('has a description', () => {
    const description = 'Log in to manage your account'
    ReactDOM.render(LoginComponent({ description }), containerElement)
    const descriptionComponent = containerElement.querySelector('.login .description')
    assert.strictEqual(descriptionComponent.textContent, description)
  })

  it('has a phone number input', () => {
    const phoneNumber = { value: '5551234567' }
    ReactDOM.render(LoginComponent({ phoneNumber }), containerElement)
    const phoneNumberComponent = containerElement.querySelector('.login .phone-number .input')
    assert.strictEqual(phoneNumberComponent.value, phoneNumber.value)
  })

  it('has a PIN input', () => {
    const pin = { value: '1234' }
    ReactDOM.render(LoginComponent({ pin }), containerElement)
    const pinInputComponent = containerElement.querySelector('.login .pin .input')
    assert.strictEqual(pinInputComponent.value, pin.value)
  })
  it('has a PIN reset action', () => {
    const pin = { resetAction: { title: 'Forgot your PIN?' } }
    ReactDOM.render(LoginComponent({ pin }), containerElement)
    const pinResetActionComponent = containerElement.querySelector('.login .pin .reset.action')
    assert.strictEqual(pinResetActionComponent.textContent, pin.resetAction.title)
  })

  it('has a submit action', () => {
    const submitAction = { title: '' }
    ReactDOM.render(LoginComponent({ submitAction }), containerElement)
    const submitActionComponent = containerElement.querySelector('.login .submit.action')
    assert.strictEqual(submitActionComponent.textContent, submitAction.title)
  })
})
