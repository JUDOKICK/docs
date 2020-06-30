import React from "react"

import "../styles/global.scss"
import { injectIntl } from "gatsby-plugin-intl"
import InitialPresentation from "../components/aboutCartesi/initialPresentation/initialPresentation"
import Header from "../components/header/header"
import OurStory from "../components/aboutCartesi/story/story"
import MeetTeam from "../components/aboutCartesi/meet/meet"
import Development from "../components/aboutCartesi/development/development"
import Advisors from "../components/aboutCartesi/advisors/advisors"
import Footer from "../components/footer/footer"
import SEO from "../components/seo/seo"

const About = ({ intl }) => {
  return (
    <div>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "aboutCartesi.title" })}
        keywords={[`Cartesi`, `About`, `Story`, `Advisors`, `Team`]}
      />
      <Header typeNav={1} pageName="about" />
      <div>
        <InitialPresentation />
        <OurStory />
        <MeetTeam />
        <Development />
        <Advisors />
      </div>
      <Footer secondFooter="second-footer" pageName={"about"} />
    </div>
  )
}

export default injectIntl(About)
