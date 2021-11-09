import { BsHouseDoor, BsStar, BsDoorOpen } from 'react-icons/bs'
import { FiAward } from 'react-icons/fi'

import {
  RulesContainer,
  RulesItems,
  RulesItemsIcon,
  RulesItemsText,
} from './PropertyRules.Styles'

export default function PropertyRules({ hostName }) {
  const rules = [
    {
      icon: <BsHouseDoor />,
      title: 'Entire place',
      detailText: 'You will have a private place to yourself.',
    },
    {
      icon: <BsStar />,
      title: 'Enhanced clean ',
      detailText:
        "This Host committed to Airbnb's 5-step enhanced cleaning process.",
    },
    {
      icon: <BsDoorOpen />,
      title: 'Self Check In',
      detailText: 'Check yourself in with the lockbox.',
    },
    {
      icon: <FiAward />,
      title: `${hostName} is a Superhost`,
      detailText:
        'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.',
    },
  ]
  return (
    <RulesContainer>
      {rules.map((rule, index) => (
        <RulesItems key={index}>
          <RulesItemsIcon>{rule.icon}</RulesItemsIcon>
          <RulesItemsText>
            <h3>{rule.title}</h3>
            <p>{rule.detailText}</p>
          </RulesItemsText>
        </RulesItems>
      ))}
    </RulesContainer>
  )
}
