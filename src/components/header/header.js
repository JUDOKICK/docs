// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

import { NavbarComp } from "../bootstrap.components"

import Menu from "./menu/menu"

import headerStyles from "./header.module.scss"
import headerLogo from "../../images/SVG/menu/logo.svg"

const { Brand, Toggle, Collapse } = NavbarComp

const Header = () => (
  <header className={headerStyles.header}>
    <NavbarComp
      className={headerStyles.navPosition}
      collapseOnSelect
      expand="lg"
      variant="light"
    >
      <Brand href="#home">
        <img
          alt=""
          src={headerLogo}
          className={[headerStyles.logo, "d-inline-block align-top"].join(" ")}
        />
      </Brand>
      <Toggle
        className={headerStyles.toggle}
        arial-controls="responsive-navbar-nav"
      />
      <Collapse
        className={headerStyles.navbarCollapse}
        id="responsive-navbar-nav"
      >
        <Menu />
      </Collapse>
    </NavbarComp>
  </header>
)

export default Header
