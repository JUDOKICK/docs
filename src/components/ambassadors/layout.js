import React from "react"

import Header from "./header/header"

const Layout = ({ children }) => {
  return (
    <div id="principal">
      <Header />
      <div>
        <main>{children}</main>
        <footer></footer>
      </div>
    </div>
  )
}

export default Layout
