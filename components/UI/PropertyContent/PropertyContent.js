import React from 'react'
import DatePicker from '../DatePicker/DatePicker'

export default function PropertyContent({
  price,
  highestReview,
  totalReviews,
}) {
  return (
    <div>
      <DatePicker
        price={price}
        highestReview={highestReview}
        totalReviews={totalReviews}
      />
    </div>
  )
}
