import React from "react"
import styles from "./whyBuildInCartesi.module.scss"
import initialStyles from "../initialPresentation/initial.module.scss"

import { RowComp } from "../../bootstrap.components"
import scalableIconSvg from "../../../images/home/whys/scalable.svg"
import versatileIconSvg from "../../../images/home/whys/versatile.svg"
import easyToBuildIconSvg from "../../../images/home/whys/easy-to-build.svg"
import fullyDecentralizedIconSvg from "../../../images/home/whys/fully-decentralized.svg"
import portableIconSvg from "../../../images/home/whys/portable.svg"
import privateIconSvg from "../../../images/home/whys/private.svg"

import { FormattedMessage } from "gatsby-plugin-intl"

const WhyBuildInCartesi = () => (
  <div>
    <div className={styles.layout}>
      <div className={["container-fluid", styles.blockContainer].join(" ")}>
        <RowComp className={styles.title}>
          <h1>
            <FormattedMessage id="home.whyBuildInCartesi.title" />
          </h1>
        </RowComp>

        <RowComp className={styles.cardGroup}>
          <div className={styles.cardLayout}>
            <div className={styles.bodyLayout}>
              <div className={styles.bodyImg}>
                <img src={scalableIconSvg} alt="" />
              </div>
              <h2>
                <FormattedMessage id="home.whyBuildInCartesi.scalable.title" />
              </h2>
              <p>
                <FormattedMessage id="home.whyBuildInCartesi.scalable.description" />
              </p>
            </div>
          </div>
          <div className={styles.cardLayout}>
            <div className={styles.bodyLayout}>
              <div className={styles.bodyImg}>
                <img src={versatileIconSvg} alt="" />
              </div>
              <h2>
                <FormattedMessage id="home.whyBuildInCartesi.versatile.title" />
              </h2>
              <p>
                <FormattedMessage id="home.whyBuildInCartesi.versatile.description" />
              </p>
            </div>
          </div>
          <div className={styles.cardLayout}>
            <div className={styles.bodyLayout}>
              <div className={styles.bodyImg}>
                <img src={easyToBuildIconSvg} alt="" />
              </div>
              <h2>
                <FormattedMessage id="home.whyBuildInCartesi.easyToBuild.title" />
              </h2>
              <p>
                <FormattedMessage id="home.whyBuildInCartesi.easyToBuild.description" />
              </p>
            </div>
          </div>
          <div className={styles.cardLayout}>
            <div className={styles.bodyLayout}>
              <div className={styles.bodyImg}>
                <img src={fullyDecentralizedIconSvg} alt="" />
              </div>
              <h2>
                <FormattedMessage id="home.whyBuildInCartesi.fullyDecentralized.title" />
              </h2>
              <p>
                <FormattedMessage id="home.whyBuildInCartesi.fullyDecentralized.description" />
              </p>
            </div>
          </div>
          <div className={styles.cardLayout}>
            <div className={styles.bodyLayout}>
              <div className={styles.bodyImg}>
                <img src={portableIconSvg} alt="" />
              </div>
              <h2>
                <FormattedMessage id="home.whyBuildInCartesi.portable.title" />
              </h2>
              <p>
                <FormattedMessage id="home.whyBuildInCartesi.portable.description" />
              </p>
            </div>
          </div>
          <div className={styles.cardLayout}>
            <div className={styles.bodyLayout}>
              <div className={styles.bodyImg}>
                <img src={privateIconSvg} alt="" />
              </div>
              <h2>
                <FormattedMessage id="home.whyBuildInCartesi.private.title" />
              </h2>
              <p>
                <FormattedMessage id="home.whyBuildInCartesi.private.description" />
              </p>
            </div>
          </div>
        </RowComp>
        <RowComp className={styles.btnGroup}>
          <div className={initialStyles.btnsList}>
            <button className={initialStyles.btnDefault}>
              <FormattedMessage id="home.whyBuildInCartesi.button.startBuildingToday" />
            </button>
          </div>
        </RowComp>
      </div>
    </div>
  </div>
)
export default WhyBuildInCartesi
