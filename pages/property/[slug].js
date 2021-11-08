import React from 'react'
import sanity, { urlFor } from '../../lib/sanity'
import Image from 'next/image'
import Layout from '../../components//layout/Layout'
import Navbar from '../../components/Navbar/Navbar'
import { Container } from '../../GlobalStyles/GlobalStyles'
import { AiTwotoneStar } from 'react-icons/ai'
import { BsAwardFill } from 'react-icons/bs'
import {
  PropertyImageContainer,
  PropertyImageItems,
  PropertyImages,
  PropertyMainImage,
  PropertyOverview,
  PropertyPlace,
  PropertyStart,
  PropertySuperHost,
  PropertyTitle,
  PropertyWrapper,
} from '../../styles/PropertyItem.Style'
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
  bedrooms,
  baths,
  guests,
  host,
  reviews,
}) {
  const ratingNumber = reviews.map((review) => review.rating)
  const highestRating = ratingNumber.reduce((a, b) => Math.max(a, b))

  return (
    <Layout pageTitle={title}>
      <Container>
        <PropertyWrapper>
          <PropertyTitle>{title}</PropertyTitle>

          <PropertyOverview>
            <PropertyStart>
              <AiTwotoneStar />
            </PropertyStart>
            <h4>{highestRating}</h4>
            <h5>({ratingNumber.length}reviews)</h5>
            <PropertySuperHost>
              . <BsAwardFill /> Superhost .
            </PropertySuperHost>
            <PropertyPlace>{place}</PropertyPlace>
          </PropertyOverview>
          <PropertyImageContainer>
            <PropertyMainImage>
              <Image
                src={urlFor(mainImage).width(600).url()}
                alt={title}
                width={600}
                height={600}
                layout="responsive"
              />
            </PropertyMainImage>
            <PropertyImages>
              {images.slice(0, 4).map((image) => (
                <PropertyImageItems>
                  <Image
                    key={image.id}
                    src={urlFor(image).width(350).url()}
                    alt={title}
                    width={350}
                    height={350}
                    layout="responsive"
                  />
                </PropertyImageItems>
              ))}
            </PropertyImages>
          </PropertyImageContainer>
          <div>
            <p>{description}</p>
            <p>
              | {beds} beds | {bedrooms} bedrooms | {baths} baths
            </p>

            <p>$ {pricePerNight} per night</p>
          </div>
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
        place: property.place,
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
