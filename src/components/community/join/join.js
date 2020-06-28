import React from "react"

import joinStyles from "./join.module.scss"
import { FormattedMessage } from "gatsby-plugin-intl"
import outlineBg from "../../../images/community/outermesh-community.svg"

const Join = () => {
  return (
    <div className={joinStyles.join}>
      <div className={[joinStyles.blockTitles, "col"].join(" ")}>
        <h1 className={joinStyles.title}>
          <FormattedMessage id="community.join.title" />
        </h1>
        <p className={joinStyles.description}>
          <FormattedMessage id="community.join.description" />
        </p>
      </div>
      <img className={joinStyles.outline} src={outlineBg} alt="outline" />
    </div>
  )
}

export default Join
