import HelloComponent from '../components/hello/index.js'

const IndexPage = ({ name }) => {
  return <HelloComponent name={name} />
}

IndexPage.getInitialProps = async () => {
  return { name: 'Andrew' }
}

export default IndexPage
