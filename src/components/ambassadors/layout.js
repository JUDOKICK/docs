import React from "react"

import Header from "./header/header"
import Footer from "./footer/footer"

import ambLayoutStyles from "../../styles/styles_amb/layout.ambassadors.module.scss"

const Layout = ({ children }) => {
  return (
    <div id={ambLayoutStyles.ambLayout}>
      <Header />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
