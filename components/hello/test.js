import ReactDOM from 'react-dom'
import assert from 'assert'
import HelloComponent from './index.js'

describe('Hello', () => {
  it('Renders a personalized greeting', () => {
    const name = 'Andrew'
    ReactDOM.render(HelloComponent({ name }), document.body)
    const helloComponent = document.querySelector('.hello')
    assert.strictEqual(helloComponent.textContent, `Hello, ${name}!`)
  })
})
