import React from "react"
// import { Link } from "gatsby"

import "../styles/global.scss"
// import Image from "../components/image"
import Header from "../components/header/header"
import InitialPresentation from "../components/home/initialPresentation/initialPresentation"
import ShapingTheFuture from "../components/home/shapingTheFuture/shapingTheFuture"
import WhyBuildInCartesi from "../components/home/whyBuildInCartesi/whyBuildInCartesi"
import HowItWorks from "../components/home/howItWorks/howItWorks"
import UseCases from "../components/home/useCases/useCases"
import Partners from "../components/home/partners/partners"
import Roadmap from "../components/home/roadmap/roadmap"
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
        <WhyBuildInCartesi />
        <HowItWorks />
        <UseCases />
        <Roadmap />
        <Partners />
        <News />
      </div>
      <Footer />
    </div>
  )
}

export default injectIntl(IndexPage)
