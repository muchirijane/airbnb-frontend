import React from 'react'
import sanity, { urlFor } from '../../lib/sanity'

import Layout from '../../components//layout/Layout'

import { Container } from '../../GlobalStyles/GlobalStyles'

import {
  PropertyImageContainer,
  PropertyImagesWrapper,
  PropertyTitle,
  PropertyWrapper,
} from '../../styles/PropertyItem.Style'
import PropertyContent from '../../components/UI/PropertyContent/PropertyContent'
import PropertyImages from '../../components/UI/PropertyImages/PropertyImages'
import FeaturedImage from '../../components/UI/PropertyImages/FeaturedImage'
import PropertyOverView from '../../components/UI/PropertyOverView/PropertyOverView'
import PropertyLocation from '../../components/UI/PropertyLocation/PropertyLocation'
export default function Property({
  title,
  place,
  location,
  description,
  propertyType,
  mainImage,
  images,
  pricePerNight,
  beds,
  bedroom,
  bathRoom,
  guests,
  host,
  reviews,
}) {
  const ratingNumber = reviews.map((review) => review.rating)
  const highestRating = ratingNumber.reduce((a, b) => Math.max(a, b))
  const totalPropertyReviews = reviews.length

  console.log(location.lng)

  return (
    <Layout pageTitle={title}>
      <Container>
        <PropertyWrapper>
          <PropertyTitle>{title}</PropertyTitle>

          <PropertyOverView
            highestRating={highestRating}
            totalReviews={totalPropertyReviews}
            place={place}
          />

          <PropertyImageContainer>
            <FeaturedImage
              mainImage={urlFor(mainImage).width(600).url()}
              mainAlt={title}
            />
            <PropertyImagesWrapper>
              {images.slice(0, 4).map((image, index) => (
                <PropertyImages
                  key={index}
                  propertyImg={urlFor(image).width(350).url()}
                  propertyImgAlt={image.caption}
                />
              ))}
            </PropertyImagesWrapper>
          </PropertyImageContainer>
          <PropertyContent
            price={pricePerNight}
            highestReview={highestRating}
            totalReviews={totalPropertyReviews}
            propertyType={propertyType}
            hostName={host.name}
            totalGuests={guests}
            beds={beds}
            baths={bathRoom}
            hostImage={urlFor(host.image).width(60).url()}
            hostAlt={host.name}
          />
          <PropertyLocation
            lat={location.lat}
            lng={location.lng}
            place={place}
          />
        </PropertyWrapper>
      </Container>
    </Layout>
  )
}

export async function getServerSideProps(pageContext) {
  const pageSlug = pageContext.query.slug

  const query = `*[_type == "property" && slug.current == $pageSlug][0]{
    title,
    location,
    place,
    description,
    propertyType,
    mainImage,
    images,
    pricePerNight,
    beds,
    bedroom,
    bathRoom,
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
        place: property.place,
        location: property.location,
        description: property.description,
        propertyType: property.propertyType,
        mainImage: property.mainImage,
        images: property.images,
        pricePerNight: property.pricePerNight,
        beds: property.beds,
        bedroom: property.bedroom,
        bathRoom: property.bathRoom,
        guests: property.guests,
        host: property.host,
        reviews: property.reviews,
      },
    }
  }
}
