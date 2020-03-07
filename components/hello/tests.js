import ReactDOM from 'react-dom'
import assert from 'assert'
import HelloComponent from './index.js'

let containerElement

beforeEach(() => {
  containerElement = document.createElement('div')
  document.body.appendChild(containerElement)
})

describe('Hello', () => {
  it('Renders a personalized greeting', () => {
    const name = 'Andrew'
    ReactDOM.render(HelloComponent({ name }), containerElement)
    const helloComponent = containerElement.querySelector('.hello')
    assert.strictEqual(helloComponent.textContent, `Hello, ${name}!`)
  })
})
