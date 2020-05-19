import React from "react"
import achievingStyle from "./achieving.module.scss"
import figAchieving from "../../images/SVG/achieving/achieving.svg"
import { FormattedMessage } from "gatsby-plugin-intl"

const Achieving = () => {
  return (
    <div>
      <div className={achievingStyle.achieving}>
        <div className={achievingStyle.title}>
          <h1><FormattedMessage  id="achieving.title"/></h1>
        </div>
        <div className={achievingStyle.block}>
          <img src={figAchieving} alt="Achieving" />
        </div>
        <div className={["row", achievingStyle.swipe].join(" ")}>
          <p><FormattedMessage  id="achieving.swipe"/>></p>
        </div>
      </div>
    </div>
  )
}

export default Achieving

