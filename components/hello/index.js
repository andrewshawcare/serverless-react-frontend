import React from 'react'

export default ({
  name = 'world'
} = {}) => {
  return React.createElement('h1', { className: 'hello' }, `Hello, ${name}!`)
}
