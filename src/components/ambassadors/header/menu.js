import React from "react"
import { Link } from "gatsby"

import ambHeaderStyle from "../../../styles/styles_amb/header.ambassadors.module.scss"
// const ambHeaderStyle = {}
const Menu = () => {
  return (
    <>
      <ul
        className={[ambHeaderStyle.headerNavbarMenu, "navbar-nav mx-auto"].join(
          " "
        )}
      >
        <li className={[ambHeaderStyle.navItem, "active"].join(" ")}>
          <Link
            className={[ambHeaderStyle.navLink, "nav-link smooth-scroll"].join(
              " "
            )}
            to="/ambassadors/#about"
            data-localize="menu.link1"
          >
            About
          </Link>
        </li>
        <li className={ambHeaderStyle.navItem}>
          <Link
            className={[ambHeaderStyle.navLink, "nav-link"].join(" ")}
            to="https://www.github.com/cartesi"
            data-localize="menu.link2"
            target="_blank"
          >
            Developers
          </Link>
        </li>
        <li className={ambHeaderStyle.navItem}>
          <Link
            className={[ambHeaderStyle.navLink, "nav-link smooth-scroll"].join(
              " "
            )}
            to="#stayintouch"
            data-localize="menu.link3"
          >
            Ecosystem
          </Link>
        </li>
        <li className={ambHeaderStyle.navItem}>
          <Link
            className={[ambHeaderStyle.navLink, "nav-link"].join(" ")}
            to="https://medium.com/cartesi"
            data-localize="menu.link4"
            target="_blank"
          >
            News
          </Link>
        </li>
      </ul>
      <ul
        className={[
          ambHeaderStyle.headerNavbarMenu,
          "navbar-nav ml-auto nav-flex-icons",
        ].join(" ")}
      >
        <li
          className={[ambHeaderStyle.navItem, ambHeaderStyle.dropdown].join(
            " "
          )}
        >
          <Link
            className={[
              ambHeaderStyle.navLink,
              "nav-link text-uppercase dropdown-toggle",
            ].join(" ")}
            to="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i
              className={[ambHeaderStyle.fas, ambHeaderStyle.faLanguage].join(
                " "
              )}
            ></i>
            &nbsp;EN
            {/* <!-- <script>var href = location.href;document.write(href.match(/([^\/]*)\/*$/)[1]);</script> --> */}
          </Link>
          {/* <!-- <div id="menulang" className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" href="./">English</Link>
                                    <Link className="dropdown-item" href="./zh">中文</Link>
                                    <Link className="dropdown-item" href="./ko">한국어</Link>
                                    <Link className="dropdown-item" href="./ru">русский</Link>
                                    <Link className="dropdown-item" href="./vi">Tiếng Việt</Link>
                                </div> --> */}
        </li>
      </ul>
    </>
  )
}

export default Menu
