import React from "react"

import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Join from "../components/community/join/join"
import Become from "../components/community/become/become"
import Channels from "../components/community/channels/channels"
import Groups from "../components/community/groups/groups"
import UpEvents from "../components/community/UpEvents/upEvents"
import { injectIntl } from "gatsby-plugin-intl"
import SEO from "../components/seo/seo"

const Community = ({ intl }) => {
  return (
    <div>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "community.title" })}
        keywords={[`Cartesi`, `Community`, `Ambassadors`, `Events`]}
      />
      <Header typeNav={1} pageName="community" />
      <div>
        <Join />
        <Become />
        <Channels />
        <Groups />
        <UpEvents />
      </div>
      <Footer />
    </div>
  )
}

export default injectIntl(Community)
