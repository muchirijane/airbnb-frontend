import { useState } from 'react'
import { BiSearch, BiMenu, BiGlobe } from 'react-icons/bi'
import Image from 'next/image'
import Link from 'next/link'
import {
  Header,
  HeaderItems,
  HeaderWrapper,
  HostContainer,
  NavbarContainer,
  ProfileContainer,
  ProfileImage,
  SearchContainer,
} from './Navbar.Styles'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navbarToggle = () => {
    setIsOpen((prevOpen) => !prevOpen)
  }

  return (
    <Header>
      <HeaderWrapper>
        <a href="/">
          <Image
            src="/airbnb-logo.svg"
            alt="airbnb logo"
            width={109}
            height={34}
            layout="fixed"
          />
        </a>
        <HeaderItems>
          <NavbarContainer isOpen={isOpen}>
            <SearchContainer>
              <label>
                <input type="search" placeholder="Start your Search" />
              </label>
              <button>
                <BiSearch />
              </button>
            </SearchContainer>

            <HostContainer>
              <Link href="/">Become a host</Link>
              <a href="/">
                <BiGlobe />
              </a>
            </HostContainer>
          </NavbarContainer>
        </HeaderItems>
        <ProfileContainer onClick={navbarToggle}>
          <BiMenu onClick={navbarToggle} />
          <ProfileImage>
            <Image
              src="/profile.png"
              alt=" default profile picture of the user"
              width={28}
              height={28}
            />
          </ProfileImage>
        </ProfileContainer>
      </HeaderWrapper>
    </Header>
  )
}
