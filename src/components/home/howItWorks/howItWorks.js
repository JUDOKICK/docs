import React from "react"
import styles from "./howItWorks.module.scss"
import initialStyles from "../initialPresentation/initial.module.scss"
import arrowsStepsSvg from "../../../images/home/how-it-works/arrows-steps-icons.svg"

import { FormattedMessage } from "gatsby-plugin-intl"
import { RowComp } from "../../bootstrap.components"

const HowItWorks = () => {
  return (
    <div>
      <div className={styles.layout}>
        <div className={["container-fluid", styles.blockContainer].join(" ")}>
          <RowComp className={styles.title}>
            <h1>
              <FormattedMessage id="home.howItWorks.title" />
            </h1>
          </RowComp>

          <div className={styles.steps}>
            <div className={styles.stepsLayout}>
              <img src={arrowsStepsSvg} alt="" />
              <div className={styles.descriptionsFirstRow}>
                <p>
                  <b>1.</b> <FormattedMessage id="home.howItWorks.step1" />
                </p>
                <p>
                  <b>2.</b> <FormattedMessage id="home.howItWorks.step2" />
                </p>
                <p>
                  <b>3.</b> <FormattedMessage id="home.howItWorks.step3" />
                </p>
              </div>
              <div className={styles.descriptionsSecondRow}>
                <p>
                  <b>4.</b> <FormattedMessage id="home.howItWorks.step4" />
                </p>
                <p>
                  <b>5.</b> <FormattedMessage id="home.howItWorks.step5" />
                </p>
                <p>
                  <b>6.</b> <FormattedMessage id="home.howItWorks.step6" />
                </p>
              </div>
            </div>
          </div>
          <RowComp className={styles.btnGroup}>
            <div className={initialStyles.btnsList}>
              <button className={initialStyles.btnDefault}>
                <FormattedMessage id="home.howItWorks.button.learnMore" />
              </button>
            </div>
          </RowComp>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
