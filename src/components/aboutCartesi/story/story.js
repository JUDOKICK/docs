import React from "react"

import storyStyles from "./story.module.scss"
import { FormattedMessage } from "gatsby-plugin-intl"

const Story = () => {
  return (
    <div className={storyStyles.story}>
      <div className={["container", storyStyles.contentBlock].join(" ")}>
        <div className={["col", storyStyles.colLg8].join(" ")}>
          <div className={storyStyles.title}>
            <FormattedMessage id="aboutCartesi.story.title" />
          </div>
          <p className={storyStyles.paragraph}>
            <FormattedMessage id="aboutCartesi.story.description.paragraph01" />
          </p>
          <p className={storyStyles.paragraph}>
            <FormattedMessage id="aboutCartesi.story.description.paragraph02" />
          </p>
          <p className={storyStyles.paragraph}>
            <FormattedMessage id="aboutCartesi.story.description.paragraph03" />
          </p>
          <p className={storyStyles.paragraph}>
            <FormattedMessage id="aboutCartesi.story.description.paragraph04" />
          </p>
          <p className={storyStyles.paragraph}>
            <FormattedMessage id="aboutCartesi.story.description.paragraph05" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Story
