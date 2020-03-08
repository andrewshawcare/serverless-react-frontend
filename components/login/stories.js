import { withKnobs, text } from '@storybook/addon-knobs'
import LoginComponent from './index.js'

export default {
  title: 'Login',
  component: LoginComponent,
  decorators: [withKnobs]
}

export const Default = () => {
  return LoginComponent({
    title: text('Title', 'Login'),
    description: text('Description', 'Lorem ipsum dolor amit.'),
    phoneNumber: {
      value: text('Phone number', '5551234567')
    },
    pin: {
      value: text('PIN', '1234'),
      resetAction: {
        title: text('PIN reset title', 'Forgot your PIN?')
      }
    },
    submitAction: {
      title: text('Submit title', 'Submit')
    }
  })
}
