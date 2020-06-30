import React from "react"
import { Link } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"

import becomeStyles from "./become.module.scss"
import { FormattedMessage } from "gatsby-plugin-intl"
import blocks from "../../../images/community/block-community.svg"


const Become = ({intl}) => {
  let lang = intl.locale
  
  return (
    <div className={becomeStyles.becomes} id="ambassadors">
      <div className={[becomeStyles.blockTitles, "col"].join(" ")}>
        <h1 className={becomeStyles.title}>
          <FormattedMessage id="community.become.title" />
        </h1>
        <p className={becomeStyles.description}>
          <FormattedMessage id="community.become.description" />
        </p>        
        <Link to={`${lang}/ambassadors`}>
          <button className={becomeStyles.btnLearn}>
            <FormattedMessage id="community.become.button1" />
          </button>
        </Link>
      </div>
      <img className={becomeStyles.blocks} src={blocks} alt="outline" />
    </div> 
  )
}

export default injectIntl(Become)
