import React from 'react'
import sanity, { urlFor } from '../../lib/sanity'
import Image from 'next/image'
import Layout from '../../components//layout/Layout'
import Navbar from '../../components/Navbar/Navbar'
import { Container } from '../../GlobalStyles/GlobalStyles'
export default function Property({
  title,
  location,
  description,
  propertyType,
  mainImage,
  images,
  pricePerNight,
  beds,
  bedrooms,
  baths,
  guests,
  host,
  reviews,
}) {
  return (
    <Layout pageTitle={title}>
      <Container>
        <h1>{title}</h1>
      </Container>
    </Layout>
  )
}

export async function getServerSideProps(pageContext) {
  const pageSlug = pageContext.query.slug

  const query = `*[_type == "property" && slug.current == $pageSlug][0]{
    title,
    location,
    description,
    propertyType,
    mainImage,
    images,
    pricePerNight,
    beds,
    bedrooms,
    baths,
    guests,
    host->{
      _id,
      name,
      slug,
      image
    },
    reviews[]{
      ...,
      traveller->{
        _id,
        name,
        slug,
        image
      }
    }


  }`

  const property = await sanity.fetch(query, { pageSlug })

  if (!property) {
    return {
      props: null,
      notFound: true,
    }
  } else {
    return {
      props: {
        title: property.title,
        location: property.location,
        description: property.description,
        propertyType: property.propertyType,
        mainImage: property.mainImage,
        images: property.images,
        pricePerNight: property.pricePerNight,
        beds: property.beds,
        bedrooms: property.bedrooms,
        baths: property.baths,
        guests: property.guests,
        host: property.host,
        reviews: property.reviews,
      },
    }
  }
}
