import React from "react"
import styles from "./howItWorks.module.scss"
import initialStyles from "../initialPresentation/initial.module.scss"
import arrowsStepsDesktopSvg from "../../../images/home/how-it-works/arrows-steps-icons-desktop.svg"
import step1Svg from "../../../images/home/how-it-works/step1.svg"
import step2Svg from "../../../images/home/how-it-works/step2.svg"
import step3Svg from "../../../images/home/how-it-works/step3.svg"
import step4Svg from "../../../images/home/how-it-works/step4.svg"
import step5Svg from "../../../images/home/how-it-works/step5.svg"
import step6Svg from "../../../images/home/how-it-works/step6.svg"

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
              <img
                src={arrowsStepsDesktopSvg}
                className={styles.imgDesktop}
                alt=""
              />
              <div className={styles.descriptionsFirstRow}>
                <div className={styles.descriptionItem}>
                  <img src={step1Svg} className={styles.imgMobile} alt="" />
                  <p>
                    <b>1.</b> <FormattedMessage id="home.howItWorks.step1" />
                  </p>
                </div>
                <div className={styles.descriptionItem}>
                  <img src={step2Svg} className={styles.imgMobile} alt="" />
                  <p>
                    <b>2.</b> <FormattedMessage id="home.howItWorks.step2" />
                  </p>
                </div>
                <div className={styles.descriptionItem}>
                  <img src={step3Svg} className={styles.imgMobile} alt="" />
                  <p>
                    <b>3.</b> <FormattedMessage id="home.howItWorks.step3" />
                  </p>
                </div>
              </div>
              <div className={styles.descriptionsSecondRow}>
                <div className={styles.descriptionItem}>
                  <img src={step4Svg} className={styles.imgMobile} alt="" />
                  <p>
                    <b>4.</b> <FormattedMessage id="home.howItWorks.step4" />
                  </p>
                </div>
                <div className={styles.descriptionItem}>
                  <img src={step5Svg} className={styles.imgMobile} alt="" />
                  <p>
                    <b>5.</b> <FormattedMessage id="home.howItWorks.step5" />
                  </p>
                </div>
                <div className={styles.descriptionItem}>
                  <img src={step6Svg} className={styles.imgMobile} alt="" />
                  <p>
                    <b>6.</b> <FormattedMessage id="home.howItWorks.step6" />
                  </p>
                </div>
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
