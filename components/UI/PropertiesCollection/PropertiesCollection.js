import React from 'react'
import Image from 'next/image'
import { AiTwotoneStar } from 'react-icons/ai'
import {
  CollectionContainer,
  PropertiesContentWrapper,
  PropertiesImgWrapper,
  ReviewWrapper,
} from './PropertiesCollection.Styles'
import Link from 'next/link'
export default function PropertiesCollection({
  propertiesImg,
  propertiesImgAlt,
  highestRating,
  totalReviews,
  place,
  title,
  price,
  propertyLink,
}) {
  return (
    <Link href={propertyLink}>
      <CollectionContainer>
        <PropertiesImgWrapper>
          <Image
            src={propertiesImg}
            alt={propertiesImgAlt}
            width={300}
            height={200}
            layout="responsive"
          />
        </PropertiesImgWrapper>
        <PropertiesContentWrapper>
          <ReviewWrapper>
            <AiTwotoneStar size={20} />
            <p>{highestRating}</p>
            <p>({totalReviews} reviews)</p>
          </ReviewWrapper>
          <h3>
            Entire <span>{place}</span>.<span> {title}</span>
          </h3>
          <h4>
            $ {price}
            <span> /night</span>
          </h4>
        </PropertiesContentWrapper>
      </CollectionContainer>
    </Link>
  )
}
