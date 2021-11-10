import { useState } from 'react'
import { BiSearch, BiMenu, BiGlobe } from 'react-icons/bi'
import Image from 'next/image'
import Link from 'next/link'
import {
  Header,
  HeaderWrapper,
  NavbarContainer,
  NavbarItem1,
  NavbarItem2,
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
        <Link href="/">
          <Image
            src="/airbnb-logo.svg"
            alt="airbnb logo"
            width={109}
            height={34}
            layout="fixed"
          />
        </Link>
        <SearchContainer>
          <label>
            <input type="search" placeholder="Start your Search" />
          </label>
          <button>
            <BiSearch />
          </button>
        </SearchContainer>

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
        <NavbarContainer isOpen={isOpen}>
          <NavbarItem1>
            <Link href="/">Message</Link>
            <Link href="/">Notification</Link>
            <Link href="/">Trips</Link>
            <Link href="/">WishList</Link>
          </NavbarItem1>
          <NavbarItem2 className="defaultLink">
            <Link href="/">Host your home</Link>
            <Link href="/">Host your experience</Link>
            <Link href="/">Account</Link>
            <Link href="/">WishList</Link>
          </NavbarItem2>
          <NavbarItem2 className="defaultLink">
            <Link href="/">Help</Link>
            <Link href="/">Logout</Link>
          </NavbarItem2>
        </NavbarContainer>
      </HeaderWrapper>
    </Header>
  )
}
