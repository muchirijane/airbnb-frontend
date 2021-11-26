import React from 'react'
import Layout from '../components/layout/Layout'
import Navbar from '../components/Navbar/Navbar'
import PropertiesClusterMap from '../components/UI/PropertiesClusterMap/PropertiesClusterMap'
import PropertiesCollection from '../components/UI/PropertiesCollection/PropertiesCollection'
import { MainContainer } from '../GlobalStyles/GlobalStyles'

import sanity, { urlFor } from '../lib/sanity'
import {
  PropertiesContainer,
  PropertiesWrapper,
  PropertiesPlaceWrapper,
  PropertiesPlaceContainer,
} from '../styles/Properties.Style'

const Home = ({ properties }) => {
  const titleText =
    'Airbnb: Vacation Rentals, Cabin, Beach Houses and Unique Houses'
  console.log(properties)
  return (
    <>
      <Layout pageTitle={titleText}>
        {properties && (
          <PropertiesContainer>
            <PropertiesPlaceContainer>
              <PropertiesPlaceWrapper>
                <h2>Los Angeles</h2>
                <PropertiesWrapper>
                  {properties.slice(0, 3).map((property, index) => (
                    <PropertiesCollection
                      key={property._id}
                      propertiesImg={urlFor(property.mainImage)
                        .width(350)
                        .url()}
                      propertiesImgAlt={property.title}
                      highestRating={property.reviews.reduce(
                        (a, b) => Math.max(a, b.rating),
                        0
                      )}
                      totalReviews={property.reviews.length}
                      place={property.propertyType}
                      title={property.title}
                      price={property.pricePerNight}
                      propertyLink={`property/${property.slug.current}`}
                    />
                  ))}
                </PropertiesWrapper>
              </PropertiesPlaceWrapper>
              <PropertiesPlaceWrapper>
                <h2>San Diego</h2>
                <PropertiesWrapper>
                  {properties.slice(2, 5).map((property, index) => (
                    <PropertiesCollection
                      key={property._id}
                      propertiesImg={urlFor(property.mainImage)
                        .width(350)
                        .url()}
                      propertiesImgAlt={property.title}
                      highestRating={property.reviews.reduce(
                        (a, b) => Math.max(a, b.rating),
                        0
                      )}
                      // totalReviews={property.reviews.length}
                      place={property.propertyType}
                      title={property.title}
                      price={property.pricePerNight}
                      propertyLink={`property/${property.slug.current}`}
                    />
                  ))}
                </PropertiesWrapper>
              </PropertiesPlaceWrapper>
              <PropertiesPlaceWrapper>
                <h2>San Francisco</h2>
                <PropertiesWrapper>
                  {properties.slice(0, 3).map((property, index) => (
                    <PropertiesCollection
                      key={property._id}
                      propertiesImg={urlFor(property.mainImage)
                        .width(350)
                        .url()}
                      propertiesImgAlt={property.title}
                      highestRating={property.reviews.reduce(
                        (a, b) => Math.max(a, b.rating),
                        0
                      )}
                      totalReviews={property.reviews.length}
                      place={property.propertyType}
                      title={property.title}
                      price={property.pricePerNight}
                      propertyLink={`property/${property.slug.current}`}
                    />
                  ))}
                </PropertiesWrapper>
              </PropertiesPlaceWrapper>
            </PropertiesPlaceContainer>

            <PropertiesClusterMap properties={properties} />
          </PropertiesContainer>
        )}
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
