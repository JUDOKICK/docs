import React from "react"

import becomeStyles from "./become.module.scss"
import { FormattedMessage } from "gatsby-plugin-intl"
import blocks from "../../../images/community/block-community.svg"

const Become = () => {
  return (
    <div className={becomeStyles.becomes}>
      <div className={[becomeStyles.blockTitles, "col"].join(" ")}>
        <h1 className={becomeStyles.title}>
          <FormattedMessage id="community.become.title" />
        </h1>
        <p className={becomeStyles.description}>
          <FormattedMessage id="community.become.description" />
        </p>
        <button className={becomeStyles.btnLearn}>
          <FormattedMessage id="community.become.button1" />
        </button>
      </div>
      <img className={becomeStyles.blocks} src={blocks} alt="outline" />
    </div>
  )
}

export default Become
