import HelloComponent from './index.js'

export default {
  component: HelloComponent,
  title: 'Hello'
}

export const Default = () => {
  return HelloComponent()
}
