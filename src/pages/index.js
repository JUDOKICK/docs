import React from "react"
// import { Link } from "gatsby"

import "../styles/global.scss"
// import Image from "../components/image"
import Header from "../components/header/header"
import InitialPresentation from "../components/home/initialPresentation/initialPresentation"
import ShapingTheFuture from "../components/home/shapingTheFuture/shapingTheFuture"
import WhyBuildWithCartesi from "../components/home/whyBuildWithCartesi/whyBuildWithCartesi"
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
        title={intl.formatMessage({ id: "home.title" })}
        keywords={[`Cartesi`, `Blockchain`, `DApps`, `Linux`]}
      />
      <Header />
      <div>
        <InitialPresentation />
        <ShapingTheFuture />
        <WhyBuildWithCartesi />
        {/* <BuildAnything /> */}
        {/* <GetStarted /> */}
        {/* <Achieving /> */}
        {/* <Partners /> */}
        {/* <Ecosystem /> */}
        {/* <News /> */}
      </div>
      <Footer />
    </div>
  )
}

export default injectIntl(IndexPage)
