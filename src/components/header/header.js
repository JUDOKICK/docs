// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, { useState } from "react"

// import classNames from "classnames"
import { NavbarComp } from "../bootstrap.components"
import Menu from "./menu/menu"

import headerStyles from "./header.module.scss"
import headerLogo from "../../images/SVG/menu/logo.svg"
import headerLogoWhite from "../../images/SVG/menu/logo-white.svg"

const { Brand, Toggle, Collapse } = NavbarComp

/* The name of the page using the menu must be passed via the props as pageName, 
example: "about", "press", except when it is "home" 

  The number of the menu style must be passed via props as typeNav,
example: 1 (to dark) or 2 (to ligth ), only number. 
*/
const Header = ({ typeNav, pageName }) => {
  const [open, setOpen] = useState(false)
  var lang = "en"
  var page = pageName !== undefined || pageName === "home" ? pageName : ""

  return (
    <header
      className={typeNav === 1 ? headerStyles.header : headerStyles.headerWhite}
    >
      <NavbarComp
        className={headerStyles.navPosition}
        collapseOnSelect
        expand="xl"
        variant="light"
      >
        <Brand href={`/${lang}/`} className={headerStyles.navbarLogo}>
          <img
            alt=""
            src={typeNav === 1 ? headerLogoWhite : headerLogo}
            className={[headerStyles.logo, "d-inline-block align-top"].join(
              " "
            )}
          />
        </Brand>
        <button
          className={[
            headerStyles.navbarToggler,
            "navbar-toggler collapsed",
          ].join(" ")}
          type="button"
          onClick={() => setOpen(!open)}
          aria-controls="responsive-navbar-nav"
          aria-expanded={open}
          // aria-label="Toggle navigation"
        >
          {/* icon menu mobile */}
          <div
            className={[
              "navbar-toggler-iconnav-icon",
              headerStyles.navIcon,
              `${open ? headerStyles.open : "closed"}`,
            ].join(" ")}
          >
            <div></div>
          </div>
        </button>
        <Collapse in={open} className={headerStyles.navbarCollapse}>
          <div id="responsive-navbar-nav">
            <Menu typeNav={typeNav} pageName={pageName} />
          </div>
        </Collapse>
      </NavbarComp>
    </header>
  )
}

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default Header
