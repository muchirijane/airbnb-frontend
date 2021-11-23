import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { AiTwotoneStar } from 'react-icons/ai'
import { BiMinus, BiPlus } from 'react-icons/bi'
import {
  ButtonChecker,
  DateContent,
  PropertyPrice,
  PropertyReviews,
  DatePickerContainer,
  CheckDate,
  GuestSelector,
  PropertyContent,
  GuestOptionWrapper,
  GuestOptionItem,
  GuestOptionText,
  ButtonOption,
  ButtonOptionWrapper,
  DatePickerWrapper,
  CheckDateWrapper,
} from './DatePicker.Styles'

export default function DatePicker({ price, highestReview, totalReviews }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleHandler = () => {
    setIsOpen((prevToggle) => !prevToggle)
  }

  const optionContent = [
    { id: 1, title: 'Adults', desc: 'Over 12' },
    { id: 2, title: 'Children', desc: 'Ages 2-12' },
    { id: 3, title: 'Infants', desc: 'Under 2' },
  ]
  return (
    <DatePickerContainer>
      <DatePickerWrapper>
        <PropertyContent>
          <PropertyPrice>
            <h3>$ {price}</h3>
            <span>/night</span>
          </PropertyPrice>
          <PropertyReviews>
            <AiTwotoneStar />
            <h4>{highestReview}</h4>
            <p>({totalReviews}) reviews</p>
          </PropertyReviews>
        </PropertyContent>
        <DateContent>
          <CheckDateWrapper>
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
          </CheckDateWrapper>
          <GuestSelector>
            <label>
              <h4>Guests</h4>
              <p>1 guest</p>
            </label>
            {isOpen ? (
              <FiChevronUp onClick={toggleHandler} />
            ) : (
              <FiChevronDown onClick={toggleHandler} />
            )}
          </GuestSelector>
          <ButtonChecker href="/">Check availability</ButtonChecker>
        </DateContent>
      </DatePickerWrapper>
      <GuestOptionWrapper isOpen={isOpen}>
        {optionContent.map((option) => (
          <GuestOptionItem key={option.id}>
            <GuestOptionText>
              <h4>{option.title}</h4>
              <p>{option.desc}</p>
            </GuestOptionText>
            <ButtonOptionWrapper>
              <ButtonOption>
                <BiMinus />
              </ButtonOption>
              <h3>1</h3>
              <ButtonOption>
                <BiPlus />
              </ButtonOption>
            </ButtonOptionWrapper>
          </GuestOptionItem>
        ))}
      </GuestOptionWrapper>
    </DatePickerContainer>
  )
}
