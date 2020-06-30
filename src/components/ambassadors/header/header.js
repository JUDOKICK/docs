import React, { useState } from "react"
import { Link } from "gatsby"
// import ambassadorsHeaderStyle from "./header.ambassadors.module.scss"
// import "../../../styles/styles_amb/style.scss"
import ambHeaderStyle from "../../../styles/styles_amb/header.ambassadors.module.scss"

import Menu from "./menu"
import logoCartesi from "../../../images/ambassadors/logo-cartesi.svg"
import { CollapseComp } from "../../bootstrap.components"

// const ambHeaderStyle = {}
const Header = () => {
  const [open, setOpen] = useState(false)

  const openMenu = () => {
    setOpen(!open)
    let sectionAmbassadors = document.getElementById("amb-ambassadors")

    if (open) {
      sectionAmbassadors.style = ""
    } else {
      sectionAmbassadors.style = "margin-top: 100px;"
    }
  }

  return (
    <div id={ambHeaderStyle.ambHeader}>
      {/* header */}
      <header id={ambHeaderStyle.header} className={ambHeaderStyle.header}>
        {/* menu */}
        <nav
          className={[
            ambHeaderStyle.headerNavbar,
            ambHeaderStyle.navbar,
            "navbar",
            "navbar-expand-md",
          ].join(" ")}
        >
          <div className={ambHeaderStyle.container}>
            <Link to="/" className="navbar-brand">
              <img
                src={logoCartesi}
                className={ambHeaderStyle.logoCartesi}
                alt="cartesi"
              />
            </Link>
            <button
              className={[
                ambHeaderStyle.navbarToggler,
                "navbar-toggler collapsed",
              ].join(" ")}
              type="button"
              onClick={openMenu}
              aria-controls="navbarSupportedContent"
              aria-expanded={open}
              aria-label="Toggle navigation"
            >
              {/* icon menu mobile */}
              <div
                className={[
                  "navbar-toggler-iconnav-icon",
                  ambHeaderStyle.navIcon,
                  `${open ? ambHeaderStyle.open : "closed"}`,
                ].join(" ")}
              >
                <div></div>
              </div>
            </button>

            <CollapseComp in={open}>
              <div className="navbar-collapse" id="navbarSupportedContent">
                <Menu />
              </div>
            </CollapseComp>
          </div>
        </nav>
        {/* //menu */}

        <div className="ambassadors__header__content">
          <div className="container">
            <h1
              id="titles"
              className={[
                ambHeaderStyle.titles,
                ambHeaderStyle.titlesBig,
                "text-center my-5 my-sm-0",
              ].join(" ")}
              data-localize="header.title"
            >
              Ambassadorial Program
            </h1>
            {/* <!-- <script>
                        var href = location.href;
                        alert(href);
                        document.write(href.match(/([^\/]*)\/*$/)[1]);

                        var sitelink;
                        if (href = "http://localhost:3000/ambassadors/") {
                            sitelink = "Ambassadorial Program";
                        } else {
                            sitelink = "Bug Bounty";
                        }
                        document.getElementById("titles").innerHTML = sitelink;
                    </script> -->
            <!-- <a href="#getstarted" class="btn btn-azul" data-localize="header.button">Apply now</a> --> */}
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
