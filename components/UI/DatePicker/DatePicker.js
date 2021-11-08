import React from 'react'
import {
  ButtonChecker,
  DateContent,
  PropertyPrice,
  PropertyReviews,
  DatePickerContainer,
  CheckDate,
  GuestSelector,
  PropertyContent,
} from './DatePicker.Styles'

export default function DatePicker({ price, highestReview, totalReviews }) {
  return (
    <DatePickerContainer>
      <PropertyContent>
        <PropertyPrice>
          {price}
          <span>/night</span>
        </PropertyPrice>
        <PropertyReviews>
          <span>{highestReview}</span>
          <span>({totalReviews}) reviews</span>
        </PropertyReviews>
      </PropertyContent>
      <DateContent>
        <CheckDate>
          <label htmlFor="checkin">Check-in</label>
          <input
            id="checkin"
            type="date"
            placeholder="Add date"
            name="checkin"
          />
        </CheckDate>
        <CheckDate>
          <label htmlFor="checkout">Check-in</label>
          <input
            id="checkout"
            type="date"
            placeholder="Add date"
            name="checkout"
          />
        </CheckDate>
        <GuestSelector>
          <label htmlFor="guests">Guests</label>
          <select id="guests" name="guests">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </GuestSelector>
        <ButtonChecker>Check availability</ButtonChecker>
      </DateContent>
    </DatePickerContainer>
  )
}
