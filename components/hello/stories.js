import { withKnobs, text } from '@storybook/addon-knobs'
import HelloComponent from './index.js'

export default {
  title: 'Hello',
  component: HelloComponent,
  decorators: [withKnobs]
}

export const Default = () => {
  return HelloComponent({ name: text('Name', 'Andrew') })
}
