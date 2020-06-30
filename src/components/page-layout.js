import React from "react"
// import { Link } from "gatsby"

import "../styles/global.scss"
// import Image from "../components/image"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import SEO from "../components/seo/seo"
import { injectIntl } from "gatsby-plugin-intl"

const Layout = ({ intl, children }) => (
  <div>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "title" })}
      keywords={[`Cartesi`, `Blockchain`, `DApps`, `Linux`]}
    />
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
)

export default injectIntl(Layout)
