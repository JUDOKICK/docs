import React from "react"
import { Link } from "gatsby"

import {
  NavComp,
  NavDropdownComp,
  DropdownComp,
} from "../../bootstrap.components"
import menuStyle from "./menu.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"
import expandDown from "../../../images/SVG/menu/expandWhite1.svg"
import expandDownUp from "../../../images/SVG/menu/expandWhite2.svg"
import expandDownBlack from "../../../images/SVG/menu/expanddown.svg"
import expandDownUpBlack from "../../../images/SVG/menu/expandUp.svg"

const { Item } = DropdownComp

const Menu = ({ typeNav, pageName }) => {
  var lang = "en"
  var page = pageName !== undefined ? pageName : ""
  var iconTypeHidden = typeNav === 1 ? expandDown : expandDownBlack
  var iconLangTypeHidden = typeNav === 1 ? expandDownBlack : expandDown
  var iconTypeHover = typeNav === 1 ? expandDownUp : expandDownUpBlack
  var iconLangTypeHover = typeNav === 1 ? expandDownUpBlack : expandDownUp

  return (
    <div>
      <NavComp
        className={[
          "ml-auto",
          typeNav === 1 ? menuStyle.menu : menuStyle.menuWhite,
          menuStyle.menuDefault,
        ]}
      >
        <div className={[menuStyle.section, "nav-item dropdown"].join(" ")}>
          <a
            aria-haspopup="true"
            aria-expanded="false"
            id="collasible-nav-dropdown-0"
            href="#"
            className={[
              "dropdown-toggle nav-link",
              menuStyle.dropdownHover,
            ].join(" ")}
            role="button"
          >
            <span className={menuStyle.iconExpand}>
              About us <img src={iconTypeHidden} alt="down"></img>
            </span>
          </a>
          <div
            aria-label="collasible-nav-dropdown-0"
            className={[menuStyle.dropdownMenu, "dropdown-menu"].join(" ")}
          >
            <div className={[menuStyle.dropdownItens].join(" ")}>
              <Link
                to={`/${lang}/${page}`}
                className={[
                  menuStyle.dropdownItem,
                  menuStyle.active,
                  "dropdown-item",
                ].join(" ")}
              >
                <span className={menuStyle.iconExpand}>
                  About us <img src={iconTypeHover} alt="down"></img>
                </span>
              </Link>
              <Link
                to={`/${lang}/about/#team`}
                className={[
                  menuStyle.dropdownItem,
                  menuStyle.active,
                  "dropdown-item",
                ].join(" ")}
              >
                Company
              </Link>

              <Link
                to={`/${lang}/about/#team`}
                className={[
                  menuStyle.dropdownItem,
                  menuStyle.active,
                  "dropdown-item",
                ].join(" ")}
              >
                Team
              </Link>
              <a
                href="https://angel.co/company/cartesi/jobs"
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  menuStyle.dropdownItem,
                  menuStyle.active,
                  "dropdown-item",
                ].join(" ")}
              >
                Carrers
              </a>
              <Link
                to="/en/press"
                className={[
                  menuStyle.dropdownItem,
                  menuStyle.active,
                  "dropdown-item",
                ].join(" ")}
              >
                Press
              </Link>
              <Link
                to={`/${lang}/${page}/#footer`}
                className={[
                  menuStyle.dropdownItem,
                  menuStyle.active,
                  "dropdown-item",
                ].join(" ")}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        {/* </NavDropdownComp> */}

        <div className={[menuStyle.section, "nav-item dropdown"].join(" ")}>
          <a
            aria-haspopup="true"
            aria-expanded="false"
            id="collasible-nav-dropdown-1"
            href="#"
            className={[
              "dropdown-toggle nav-link",
              menuStyle.dropdownHover,
            ].join(" ")}
            role="button"
          >
            <span className={menuStyle.iconExpand}>
              Community <img src={iconTypeHidden} alt="down"></img>
            </span>
          </a>
          <div
            aria-label="collasible-nav-dropdown-0"
            className={[menuStyle.dropdownMenu, "dropdown-menu"].join(" ")}
          >
            <div className={[menuStyle.dropdownItens].join(" ")}>
              <Link
                to="/en/community"
                className={[
                  menuStyle.dropdownItem,
                  menuStyle.active,
                  "dropdown-item",
                ].join(" ")}
              >
                <span className={menuStyle.iconExpand}>
                  Community <img src={iconTypeHover} alt="down"></img>
                </span>
              </Link>
              <Link
                to="/en/community/#ambassadors"
                className={[
                  menuStyle.dropdownItem,
                  menuStyle.active,
                  "dropdown-item",
                ].join(" ")}
              >
                Ambassadors
              </Link>
              <Link
                to="/en/community/#channels"
                className={[
                  menuStyle.dropdownItem,
                  menuStyle.active,
                  "dropdown-item",
                ].join(" ")}
              >
                Channels
              </Link>
              <Link
                to="/en/wallets"
                className={[
                  menuStyle.dropdownItem,
                  menuStyle.active,
                  "dropdown-item",
                ].join(" ")}
              >
                Wallets & Exchanges
              </Link>
            </div>
          </div>
        </div>

        <div className={[menuStyle.section, "nav-item dropdown"].join(" ")}>
          <a
            aria-haspopup="true"
            aria-expanded="false"
            id="collasible-nav-dropdown-2"
            href="#"
            className={[
              "dropdown-toggle nav-link",
              menuStyle.dropdownHover,
            ].join(" ")}
            role="button"
          >
            <span className={menuStyle.iconExpand}>
              Developers <img src={iconTypeHidden} alt="down"></img>
            </span>
          </a>
          <div
            aria-label="collasible-nav-dropdown-0"
            className={[menuStyle.dropdownMenu, "dropdown-menu"].join(" ")}
          >
            <div className={[menuStyle.dropdownItens].join(" ")}>
              <Link
                to={`/${lang}/${page}/`}
                className={[
                  menuStyle.dropdownItem,
                  menuStyle.active,
                  "dropdown-item",
                ].join(" ")}
              >
                <span className={menuStyle.iconExpand}>
                  Developers <img src={iconTypeHover} alt="down"></img>
                </span>
              </Link>
              <a
                href="https://medium.com/cartesi/tagged/tech"
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  menuStyle.dropdownItem,
                  menuStyle.active,
                  "dropdown-item",
                ].join(" ")}
              >
                Technology
              </a>

              <a
                href="https://cartesi.io/cartesi_whitepaper.pdf"
                target="_black"
                rel="noopener noreferre"
                className={[
                  menuStyle.dropdownItem,
                  menuStyle.active,
                  "dropdown-item",
                ].join(" ")}
              >
                Whitepaper
              </a>
              <a
                href="https://github.com/cartesi"
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  menuStyle.dropdownItem,
                  menuStyle.active,
                  "dropdown-item",
                ].join(" ")}
              >
                Github
              </a>
              <a
                href="https://www.coingecko.com/en/coins/cartesi"
                target="_blank"
                rel="noopener noreffer"
                className={[
                  menuStyle.dropdownItem,
                  menuStyle.active,
                  "dropdown-item",
                ].join(" ")}
              >
                CTSI Token
              </a>
              <Link
                to="/en/about/#footer"
                className={[
                  menuStyle.dropdownItem,
                  menuStyle.active,
                  "dropdown-item",
                ].join(" ")}
              >
                Developer Portal
              </Link>
            </div>
          </div>
        </div>

        <div className={menuStyle.section}>
          <a className="nav-link" href="https://medium.com/cartesi">
            Blog
          </a>
        </div>

        <div className={[menuStyle.section, "nav-item dropdown"].join(" ")}>
          <a
            aria-haspopup="true"
            aria-expanded="false"
            id="collasible-nav-dropdown-2"
            href="#"
            className={[
              "dropdown-toggle nav-link",
              menuStyle.dropdownHover,
            ].join(" ")}
            role="button"
          >
            <span className={menuStyle.iconExpand}>
              Resources <img src={iconTypeHidden} alt="down"></img>
            </span>
          </a>
          <div
            aria-label="collasible-nav-dropdown-0"
            className={[menuStyle.dropdownMenu, "dropdown-menu"].join(" ")}
          >
            <div className={[menuStyle.dropdownItens].join(" ")}>
              <Link
                to={`/${lang}/${page}/`}
                className={[
                  menuStyle.dropdownItem,
                  menuStyle.active,
                  "dropdown-item",
                ].join(" ")}
              >
                <span className={menuStyle.iconExpand}>
                  Resources <img src={iconTypeHover} alt="down"></img>
                </span>
              </Link>
              <a
                href="https://medium.com/cartesi/tagged/tech"
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  menuStyle.dropdownItem,
                  menuStyle.active,
                  "dropdown-item",
                ].join(" ")}
              >
                FAQ
              </a>

              <a
                href="https://cartesi.io/cartesi_lightpaper_english.pdf"
                target="_black"
                rel="noopener noreferre"
                className={[
                  menuStyle.dropdownItem,
                  menuStyle.active,
                  "dropdown-item",
                ].join(" ")}
              >
                Lightpaper
              </a>
              <a
                href="https://medium.com/cartesi/on-linux-and-blockchains-a955a49a84e1"
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  menuStyle.dropdownItem,
                  menuStyle.active,
                  "dropdown-item",
                ].join(" ")}
              >
                Cartesi for Beginners
              </a>
            </div>
          </div>
        </div>

        <div
          className={[menuStyle.section, menuStyle.whitepaper, "nav-link"].join(
            " "
          )}
        >
          <a
            href="https://medium.com/cartesi/on-linux-and-blockchains-a955a49a84e1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className={menuStyle.svg} icon={faFilePdf} />
            {"   "} Whitepaper
          </a>
        </div>
        <div className={[menuStyle.locale, "nav-item dropdown"].join(" ")}>
          <a
            aria-haspopup="true"
            aria-expanded="false"
            id="collasible-nav-dropdown-2"
            href="#"
            className={[
              "dropdown-toggle nav-link",
              menuStyle.dropdownHover,
            ].join(" ")}
            role="button"
          >
            <span className={menuStyle.iconExpand}>
              ENG <img src={iconLangTypeHidden} alt="down"></img>
            </span>
          </a>
          <div
            aria-label="collasible-nav-dropdown-6"
            className={[menuStyle.dropdownMenu, "dropdown-menu"].join(" ")}
          >
            <div className={menuStyle.dropdownItens}>
              <Link
                to={`/${lang}/${page}/`}
                className={[
                  menuStyle.itemLocale,
                  menuStyle.active,
                  "dropdown-item",
                ].join(" ")}
              >
                <span className={menuStyle.iconExpand}>
                  ENG <img src={iconLangTypeHover} alt="down"></img>
                </span>
              </Link>
              {/* <Link
                to="/en/about/#footer"
                className={[
                  menuStyle.itemLocale,
                  menuStyle.active,
                  "dropdown-item",
                ].join(" ")}
              >
                中文
              </Link> */}
            </div>
          </div>
        </div>
      </NavComp>
    </div>
  )
}

export default Menu
