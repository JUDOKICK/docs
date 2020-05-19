import React from "react"
import { Link } from "gatsby"

import { NavComp, NavDropdownComp } from "../../bootstrap.components"
import menuStyle from "./menu.module.scss"
// const { Item } = NavDropdownComp

const Menu = () => (
  <div>
    <NavComp className="ml-auto">
      <div className={menuStyle.section}>
        <Link className="nav-link" to={`/${"en"}/#news`}>
          News
        </Link>
      </div>

      <NavDropdownComp
        className={menuStyle.section}
        title="DApps"
        id="collasible-nav-dropdown-1"
      >
        {/* <Item href="#action/3.1">Action</Item>
        <Item href="#action/3.2">Another action</Item> */}
      </NavDropdownComp>
      <NavDropdownComp
        className={menuStyle.section}
        title="Developers"
        id="collasible-nav-dropdown-2"
      >
        {/* <Item href="#action/3.1.1">Action</Item>
        <Item href="#action/3.2.1">Another action</Item> */}
      </NavDropdownComp>
      <NavDropdownComp
        className={menuStyle.section}
        title="Community"
        id="collasible-nav-dropdown-3"
      >
        {/* <Item href="#action/3.1.2">Action</Item>
        <Item href="#action/3.2.2">Another action</Item> */}
      </NavDropdownComp>
      <NavDropdownComp
        className={menuStyle.section}
        title="About"
        id="collasible-nav-dropdown-4"
      >
        {/* <Item href="#action/3.1.3">Action</Item>
        <Item href="#action/3.2.3">Another action</Item> */}
      </NavDropdownComp>
      <NavDropdownComp
        className={menuStyle.locale}
        title="ENG"
        id="collasible-nav-dropdown-5"
      >
        {/* <Item href="#action/3.1.4">CH</Item>
        <Item href="#action/3.2.4">ES</Item> */}
      </NavDropdownComp>
    </NavComp>
  </div>
)

export default Menu
