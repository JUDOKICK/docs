import React from "react"
import { Link } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"

import ambHeaderStyle from "../../../styles/styles_amb/header.ambassadors.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLanguage } from "@fortawesome/free-solid-svg-icons"
const Menu = ({intl}) => {
  let lang = intl.locale

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
            to={`/${lang}/about`}
          >
            About
          </Link>
        </li>
        <li className={ambHeaderStyle.navItem}>
          <Link
            className={[ambHeaderStyle.navLink, "nav-link smooth-scroll"].join(
              " "
            )}
            to={`/${lang}/docs/intro`}            
          >
            Developers
          </Link>
        </li>
        <li className={ambHeaderStyle.navItem}>
          <Link
            className={[ambHeaderStyle.navLink, "nav-link smooth-scroll"].join(
              " "
            )}
            to={`/${lang}/ecosystem`}            
          >
            Ecosystem
          </Link>
        </li>
        <li className={ambHeaderStyle.navItem}>
          <Link
            className={[ambHeaderStyle.navLink, "nav-link smooth-scroll"].join(
              " "
            )}
            to={`/${lang}/press`}            
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
          >
            <FontAwesomeIcon icon={faLanguage} />
            &nbsp;EN
            {/* <!-- <script>var href = location.href;document.write(href.match(/([^\/]*)\/*$/)[1]);</script> --> */}
          </Link>

        </li>
      </ul>
    </>
  )
}

export default injectIntl(Menu)
