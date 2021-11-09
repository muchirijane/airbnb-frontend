import Image from 'next/image'
import {
  PropertyHostContainer,
  PropertyHostContent,
  PropertyHostImage,
  PropertyHostItem,
  PropertyHostTitle,
  PropertyHostWrapper,
} from './PropertyHost.Styles'

export default function PropertyHost({
  propertyType,
  hostName,
  totalGuests,
  beds,
  baths,
  hostImage,
  hostImgAlt,
}) {
  return (
    <PropertyHostContainer>
      <PropertyHostWrapper>
        <PropertyHostTitle>
          <h2>
            Entire {propertyType}
            <span> hosted by {hostName}</span>
          </h2>
        </PropertyHostTitle>
        <PropertyHostItem>
          <PropertyHostContent>{totalGuests} guests . </PropertyHostContent>
          <PropertyHostContent>{propertyType}</PropertyHostContent>
          <PropertyHostContent>. {beds} bed</PropertyHostContent>
          <PropertyHostContent>.{baths} bath</PropertyHostContent>
        </PropertyHostItem>
      </PropertyHostWrapper>
      <PropertyHostImage>
        <Image
          src={hostImage}
          alt={hostImgAlt}
          width={60}
          height={60}
          layout="responsive"
        />
      </PropertyHostImage>
    </PropertyHostContainer>
  )
}
