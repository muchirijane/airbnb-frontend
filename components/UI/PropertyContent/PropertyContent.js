import React from 'react'
import CovidRules from '../CovidRules/CovidRules'
import DatePicker from '../DatePicker/DatePicker'
import PropertyHost from '../PropertyHost/PropertyHost'
import PropertyRules from '../PropertyRules/PropertyRules'
import {
  PropertyDetailsContainer,
  PropertyDetails,
  PropertyDateWrapper,
} from './PropertyContent.Styles'

export default function PropertyContent({
  price,
  highestReview,
  totalReviews,
  propertyType,
  hostName,
  totalGuests,
  beds,
  baths,
  hostImage,
  hostImageAlt,
}) {
  return (
    <PropertyDetailsContainer>
      <PropertyDateWrapper>
        <DatePicker
          price={price}
          highestReview={highestReview}
          totalReviews={totalReviews}
        />
      </PropertyDateWrapper>
      <PropertyDetails>
        <PropertyHost
          propertyType={propertyType}
          hostName={hostName}
          totalGuests={totalGuests}
          beds={beds}
          baths={baths}
          hostImage={hostImage}
          hostImageAlt={hostImageAlt}
        />
        <PropertyRules hostName={hostName} />
        <CovidRules />
      </PropertyDetails>
    </PropertyDetailsContainer>
  )
}
