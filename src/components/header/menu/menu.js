import React from "react"
import { Link } from "gatsby"

import { NavComp, NavDropdownComp } from "../../bootstrap.components"
import menuStyle from "./menu.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import expandDown from "../../../images/SVG/menu/expandWhite1.svg"
import expadDownBlack from "../../../images/SVG/menu/expanddown.svg"

const { Item } = NavDropdownComp

const Menu = ({ typeNav }) => {
  var iconType = typeNav === 1 ? expandDown : expadDownBlack
  var iconLangType = typeNav === 1 ? expadDownBlack : expandDown

  return (
    <div>
      <NavComp
        className={[
          "ml-auto",
          typeNav === 1 ? menuStyle.menu : menuStyle.menuWhite,
          menuStyle.menuDefault,
        ]}
      >
        <NavDropdownComp
          className={menuStyle.section}
          title={
            <span className={menuStyle.iconExpand}>
              About us <img src={iconType} alt="down"></img>
            </span>
          }
          id="collasible-nav-dropdown-1"
        >
          <div className={menuStyle.dropdownItens}>
            <Item href="#action/3.1" className={menuStyle.dropdownItem}>
              About
            </Item>
            <Item href="#action/3.2" className={menuStyle.dropdownItem}>
              Company
            </Item>
            <Item href="#action/3.3" className={menuStyle.dropdownItem}>
              Team
            </Item>
            <Item href="#action/3.4" className={menuStyle.dropdownItem}>
              Carrers
            </Item>
            <Item href="#action/3.5" className={menuStyle.dropdownItem}>
              Press
            </Item>
            <Item href="#action/3.6" className={menuStyle.dropdownItem}>
              Contact Us
            </Item>
          </div>
        </NavDropdownComp>

        <NavDropdownComp
          className={menuStyle.section}
          title={
            <span className={menuStyle.iconExpand}>
              Community <img src={iconType} alt="down"></img>
            </span>
          }
          id="collasible-nav-dropdown-1"
        >
          <div className={menuStyle.dropdownItens}>
            <Item href="#action/4.1" className={menuStyle.dropdownItem}>
              Teste
            </Item>
            <Item href="#action/4.2" className={menuStyle.dropdownItem}>
              Teste2
            </Item>
            <Item href="#action/4.3" className={menuStyle.dropdownItem}>
              Teste3
            </Item>
          </div>
        </NavDropdownComp>
        <NavDropdownComp
          className={menuStyle.section}
          title={
            <span className={menuStyle.iconExpand}>
              Developers <img src={iconType} alt="down"></img>
            </span>
          }
          id="collasible-nav-dropdown-2"
        >
          <Item href="#action/5.1" className={menuStyle.dropdownItem}>
            Teste
          </Item>
          <Item href="#action/5.2" className={menuStyle.dropdownItem}>
            Teste2
          </Item>
          <Item href="#action/5.3" className={menuStyle.dropdownItem}>
            Teste3
          </Item>
        </NavDropdownComp>
        <NavDropdownComp
          className={menuStyle.section}
          title={
            <span className={menuStyle.iconExpand}>
              DApps <img src={iconType} alt="down"></img>
            </span>
          }
          id="collasible-nav-dropdown-3"
        >
          <Item href="#action/6.1" className={menuStyle.dropdownItem}>
            Teste
          </Item>
          <Item href="#action/6.2" className={menuStyle.dropdownItem}>
            Teste2
          </Item>
          <Item href="#action/6.3" className={menuStyle.dropdownItem}>
            Teste3
          </Item>
        </NavDropdownComp>

        <div className={menuStyle.section}>
          <Link className="nav-link" to={`/${"en"}/#blog`}>
            Blog
          </Link>
        </div>
        <NavDropdownComp
          className={menuStyle.section}
          title={
            <span className={menuStyle.iconExpand}>
              Resources <img src={iconType} alt="down"></img>
            </span>
          }
          id="collasible-nav-dropdown-4"
        >
          <Item href="#action/7.1" className={menuStyle.dropdownItem}>
            Teste
          </Item>
          <Item href="#action/7.2" className={menuStyle.dropdownItem}>
            Teste2
          </Item>
          <Item href="#action/7.3" className={menuStyle.dropdownItem}>
            Teste3
          </Item>
        </NavDropdownComp>
        <div
          className={[menuStyle.section, menuStyle.whitepaper, "nav-link"].join(
            " "
          )}
        >
          <a href="/#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className={menuStyle.svg} icon={faFilePdf} />
            {"   "} Whitepaper
          </a>
        </div>
        <NavDropdownComp
          className={menuStyle.locale}
          title={
            <span className={menuStyle.iconExpand}>
              ENG <img src={iconLangType} alt="down"></img>
            </span>
          }
          eventKey={6}
        >
          <Item href="#action/8.1" className={menuStyle.itemLocale}>
            中文
          </Item>
          {/* <Item href="#action/3.2.4" className={menuStyle.itemLocale}>
            ES
          </Item> */}
        </NavDropdownComp>
      </NavComp>
    </div>
  )
}

export default Menu
