import { BsAwardFill } from 'react-icons/bs'
import { AiTwotoneStar } from 'react-icons/ai'
import {
  PropertyOverviewWrapper,
  PropertyStart,
  PropertySuperHost,
  PropertyPlace,
} from './PropertyOverView.Styles'

export default function PropertyOverView({
  place,
  highestRating,
  totalReviews,
}) {
  return (
    <PropertyOverviewWrapper>
      <PropertyStart>
        <AiTwotoneStar />
      </PropertyStart>
      <h4>{highestRating}</h4>
      <h5>({totalReviews}reviews)</h5>
      <PropertySuperHost>
        . <BsAwardFill /> Superhost .
      </PropertySuperHost>
      <PropertyPlace>{place}</PropertyPlace>
    </PropertyOverviewWrapper>
  )
}
