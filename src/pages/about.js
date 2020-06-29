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

const About = ({ intl }) => {
  return (
    <>
      <Header typeNav={1} pageName="about" />
      <div>
        <InitialPresentation />
        <OurStory />
        <MeetTeam />
        <Development />
        <Advisors />
      </div>
      <Footer secondFooter="second-footer" pageName={"about"} />
    </>
  )
}

export default injectIntl(About)
