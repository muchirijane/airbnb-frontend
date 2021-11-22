import React from 'react'
import { Container } from '../../GlobalStyles/GlobalStyles'
import {
  Copyright,
  FooterContainer,
  FooterItem,
  FooterWrapper,
} from './Footer.Styles'
import Link from 'next/link'
import { FooterLinks } from '../../data/footer'

export default function Footer() {
  return (
    <FooterContainer>
      <Container>
        <FooterWrapper>
          {FooterLinks.map((item, index) => (
            <FooterItem key={item.id}>
              <h3>{item.title}</h3>
              {item.links.map((link, index) => (
                <Link href={link.href} key={index}>
                  {link.text}
                </Link>
              ))}
            </FooterItem>
          ))}
        </FooterWrapper>
        <Copyright>
          <p>
            &copy; {new Date().getFullYear()} Airbnb, Inc. All rights reserved.
          </p>
        </Copyright>
      </Container>
    </FooterContainer>
  )
}
