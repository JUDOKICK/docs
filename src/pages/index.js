import React from "react"
// import { Link } from "gatsby"

import "../styles/global.scss"
// import Image from "../components/image"
import Header from "../components/header/header"
import InitialApresentation from "../components/initialApresentation/initialApresentation"
import CartesiProvide from "../components/cartesiProvide/cartesiProvide"
import ExploreCartesi from "../components/exploreCartesi/exploreCartesi"
import BuildAnything from "../components/buildAnything/buildAnything"
import GetStarted from "../components/getStarted/getStarted"
import Achieving from "../components/achieving/achieving"
import Partners from "../components/partners/partners"
import Ecosystem from "../components/ecosystem/ecosystem"
import News from "../components/news/news"
import Footer from "../components/footer/footer"
import SEO from "../components/seo/seo"
import { injectIntl } from "gatsby-plugin-intl"

const IndexPage = ({ intl }) => {
  return (
    <div>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title" })}
        keywords={[`Cartesi`, `Blockchain`, `DApps`, `Linux`]}
      />
      <Header />
      <div>
        <InitialApresentation />
        <CartesiProvide />
        <ExploreCartesi />
        <BuildAnything />
        <GetStarted />
        <Achieving />
        <Partners />
        <Ecosystem />
        <News />
      </div>
      <Footer />
    </div>
  )
}

export default injectIntl(IndexPage)
