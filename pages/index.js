import sanity from '../lib/sanity'

const Home = ({ properties }) => {
  console.log(properties)
  return <h1>Sanity</h1>
}

export const getServerSideProps = async () => {
  const query = `*[_type == "property"] `
  const properties = await sanity.fetch(query)

  if (!properties.length) {
    return {
      props: {
        properties: [],
      },
    }
  } else {
    return {
      props: {
        properties,
      },
    }
  }
}

export default Home
