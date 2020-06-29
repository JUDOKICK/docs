import React from "react"

import upEventsStyles from "./upEvents.module.scss"
import { FormattedMessage } from "gatsby-plugin-intl"
import News from "../../news/news"

const UpEvents = () => {
  return (
    <div className={upEventsStyles.upEvents}>
      <FormattedMessage id="community.upcoming.title">
        {title => <News title={title} />}
      </FormattedMessage>
    </div>
  )
}

export default UpEvents
