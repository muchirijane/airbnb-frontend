import Layout from '../components/layout/Layout'
import Navbar from '../components/Navbar/Navbar'
import { MainContainer } from '../GlobalStyles/GlobalStyles'

import sanity from '../lib/sanity'

const Home = ({ properties }) => {
  const titleText =
    'Airbnb: Vacation Rentals, Cabin, Beach Houses and Unique Houses'
  console.log(properties)
  return (
    <>
      <Layout pageTitle={titleText}>
        {/* <MainContainer>
          <h1>Sanity</h1>
        </MainContainer> */}
      </Layout>
    </>
  )
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
