import React from "react"
import { Link } from "gatsby"

import { NavComp, DropdownComp } from "../../bootstrap.components"
import menuStyle from "./menu.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"
import expandDown from "../../../images/SVG/menu/expandWhite1.svg"
import expandDownUp from "../../../images/SVG/menu/expandWhite2.svg"
import expandDownBlack from "../../../images/SVG/menu/expanddown.svg"
import expandDownUpBlack from "../../../images/SVG/menu/expandUp.svg"

// const { Item } = DropdownComp

const Menu = ({ typeNav, pageName }) => {
  var lang = "en"
  var page = pageName !== undefined || pageName !== "home" ? pageName : ""
  var iconTypeHidden = typeNav === 1 ? expandDown : expandDownBlack
  var iconLangTypeHidden = typeNav === 1 ? expandDownBlack : expandDown
  // var iconTypeHover = typeNav === 1 ? expandDownUp : expandDownUpBlack
  // var iconLangTypeHover = typeNav === 1 ? expandDownUpBlack : expandDownUp

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
          <div className={menuStyle.dropdowner}>
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
              Careers
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

        <div className={[menuStyle.section, "nav-item dropdown"].join(" ")}>
          <div className={menuStyle.dropdowner}>
            <Link
              id="collasible-nav-dropdown-1"
              to={`/${lang}/community`}
              className={[
                "dropdown-toggle nav-link",
                menuStyle.dropdownHover,
                menuStyle.anchor,
              ].join(" ")}
              role="button"
            >
              <span className={menuStyle.iconExpand}>
                Community <img src={iconTypeHidden} alt="down"></img>
              </span>
            </Link>
            <Link
              to={`/${lang}/community/#ambassadors`}
              className={[
                menuStyle.dropdownItem,
                menuStyle.active,
                "dropdown-item",
              ].join(" ")}
            >
              Ambassadors
            </Link>
            <Link
              to={`/${lang}/community/#channels`}
              className={[
                menuStyle.dropdownItem,
                menuStyle.active,
                "dropdown-item",
              ].join(" ")}
            >
              Channels
            </Link>
            <Link
              to={`/${lang}/ecosystem`}
              className={[
                menuStyle.dropdownItem,
                menuStyle.active,
                "dropdown-item",
              ].join(" ")}
            >
              Ecosystem
            </Link>
          </div>
        </div>

        <div className={[menuStyle.section, "nav-item dropdown"].join(" ")}>
          <div className={menuStyle.dropdowner}>
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
              to={`/${lang}/${page}/#footer`}
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

        <div className={[menuStyle.section, "nav-item dropdown"].join(" ")}>
          <div className={menuStyle.dropdowner}>
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
                DApps <img src={iconTypeHidden} alt="down"></img>
              </span>
            </a>

            <a
              href="https://creepts.cartesi.io"
              target="_blank"
              rel="noopener noreffer"
              className={[
                menuStyle.dropdownItem,
                menuStyle.active,
                "dropdown-item",
              ].join(" ")}
            >
              Creepts
            </a>
          </div>
        </div>

        <div className={[menuStyle.section, menuStyle.anchor].join(" ")}>
          <a
            className="nav-link"
            href="https://medium.com/cartesi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </div>

        <div className={[menuStyle.section, "nav-item dropdown"].join(" ")}>
          <div className={menuStyle.dropdowner}>
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

            <a
              href="#"
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
              Whitepaper
            </a>
          </div>
        </div>

        <div
          className={[menuStyle.section, menuStyle.whitepaper, "nav-link"].join(
            " "
          )}
        >
          <a
            href="https://cartesi.io/cartesi_whitepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className={menuStyle.svg} icon={faFilePdf} />
            {"   "} Whitepaper
          </a>
        </div>
        <div className={[menuStyle.locale, "nav-item dropdown"].join(" ")}>
          <div className={menuStyle.dropdowner}>
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
            {/* <a
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
              中文
            </a> */}
          </div>
        </div>
      </NavComp>
    </div>
  )
}

export default Menu
