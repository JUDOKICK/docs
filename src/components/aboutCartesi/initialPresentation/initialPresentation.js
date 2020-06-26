import React from "react"

import { FormattedMessage } from "gatsby-plugin-intl"
import initialPresentationStyles from "./initialPresentation.module.scss"
import aboutVector from "../../../images/aboutCartesi/about-vector-initial.svg"
import maskEffect from "../../../images/aboutCartesi/leak-effect-bg.svg"

const InitialPresentation = () => {
  return (
    <div className={initialPresentationStyles.initial}>
      <div className={["row", initialPresentationStyles.blockTitle].join(" ")}>
        <div className="col-lg-6">
          <h1 className={initialPresentationStyles.title}>
            {" "}
            <FormattedMessage id="aboutCartesi.initial.title" />{" "}
          </h1>
          <h5 className={initialPresentationStyles.description}>
            {" "}
            <FormattedMessage id="aboutCartesi.initial.titleContinue" />{" "}
          </h5>
        </div>
      </div>
      <img
        className={initialPresentationStyles.maskEffect}
        src={maskEffect}
        alt="maks"
      />
      <img
        className={initialPresentationStyles.vectorBg}
        src={aboutVector}
        alt="vector"
      />
    </div>
  )
}

export default InitialPresentation
