import React from "react"
import ReactNavbar from "overlay-navbar/dist/lib/ReactNavbar"
import logo from "../../images/logo.png"
import { FaUserAlt } from "react-icons/fa"

const Header = () => {
  return (
    <ReactNavbar
      navColor1="white"
      navColor2="hsl(219, 48%, 10%)"
      burgerColor="hsl(200, 48%, 75%)"
      burgerColorHover="hsl(219, 48%, 10%))"
      logo={logo}
      logoWidth="250px"
      logoHoverColor="hsl(250, 100%, 75%)"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="About"
      link3Text="Projects"
      link4Text="Contact"
      link1Url="/"
      link2Url="/about"
      link3Url="/projects"
      link4Url="/contact"
      ink1ColorHover="white"
      link1Color="HSL(945, 100%, 75%)"
      link1Size="1.5rem"
      link1Padding="3vmax"
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      profileIconColor="HSL(945, 100%, 75%)"
      profileIconColorHover="white"
    />
  )
}

export default Header
