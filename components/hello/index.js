import React from 'react'

export default ({ name } = {}) => {
  return React.createElement('h1', { className: 'hello' }, `Hello, ${name}!`)
}
