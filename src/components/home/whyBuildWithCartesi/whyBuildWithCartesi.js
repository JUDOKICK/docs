import React from "react"

import styles from "./whyBuildWithCartesi.module.scss"
import { RowComp, CardComp } from "../../bootstrap.components"
import iconBlockchain from "../../../images/SVG/explore/blockchain.svg"
import iconDevelopment from "../../../images/SVG/explore/easeDevelopment.svg"
import iconRealOs from "../../../images/SVG/explore/realOs.svg"
import scalableIconSvg from "../../../images/home/whys/scalable.svg"
import versatileIconSvg from "../../../images/home/whys/versatile.svg"
import easyToBuildIconSvg from "../../../images/home/whys/easy-to-build.svg"
import fullyDecentralizedIconSvg from "../../../images/home/whys/fully-decentralized.svg"
import portableIconSvg from "../../../images/home/whys/portable.svg"
import privateIconSvg from "../../../images/home/whys/private.svg"

import { FormattedMessage } from "gatsby-plugin-intl"

const WhyBuildWithCartesi = () => (
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
              <div>
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
        </RowComp>
      </div>
    </div>
  </div>
)
export default WhyBuildWithCartesi
