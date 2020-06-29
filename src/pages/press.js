import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import MediaCoverage from "../components/press/mediaCoverage/mediaCoverage"
import CartesiMedia from "../components/press/cartesiMedia/cartesiMedia"
import LatestUpdates from "../components/press/latestUpdates/latestUpdates"

import SEO from "../components/seo/seo"

const Press = ({ intl }) => {
  return (
    <div>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "press.title" })}
        keywords={[`Cartesi`, `Blockchain`, `Linux`, `Press`]}
      />
      <div>
        <Header typeNav={2} pageName="press" />
        <MediaCoverage />
        <CartesiMedia />
        <LatestUpdates />
        <Footer />
      </div>
    </div>
  )
}


export default injectIntl(Press)
