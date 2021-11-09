import React from 'react'
import { CovidButton, CovidContainer } from './CovidRules.Styles'

export default function CovidRules() {
  return (
    <CovidContainer>
      <h3>**CORONAVIRUS UPDATE BELOW**</h3>
      <p>
        Modern & spacious guest suite, spectacular ocean views. Giant sliding
        glass doors on two walls completely open the space. The line between
        inside and outside melts away to create a uniquely relaxing experience &
        unbeatable view.
        <div> . . .</div>
      </p>
      <CovidButton>Show More &gt; </CovidButton>
    </CovidContainer>
  )
}
