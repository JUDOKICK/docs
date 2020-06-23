import React from "react"

import Header from "./header/header"

import ambLayoutStyles from "../../styles/styles_amb/layout.ambassadors.module.scss"

const Layout = ({ children }) => {
  return (
    <div id={["principal", ambLayoutStyles.ambLayout].join(" ")}>
      <Header />
      <div>
        <main>{children}</main>
        <footer></footer>
      </div>
    </div>
  )
}

export default Layout
