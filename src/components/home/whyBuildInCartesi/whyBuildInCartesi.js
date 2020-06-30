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
import { Link } from "gatsby"

const WhyBuildInCartesi = () => (
  <div id="whyBuildInCartesi">
    <div className={styles.layout}>
      <div className={["container-fluid", styles.blockContainer].join(" ")}>
        <RowComp className={styles.title}>
          <h1>
            <FormattedMessage id="home.whyBuildInCartesi.title" />
          </h1>
        </RowComp>

        <RowComp className={styles.cardGroup}>
          <div className={`${styles.cardLayout} col-lg-4 col-md-6`}>
            <div className={styles.bodyLayout}>
              <h2>
                <img src={scalableIconSvg} alt="" />
                <span>
                  <FormattedMessage id="home.whyBuildInCartesi.scalable.title" />
                </span>
              </h2>
              <p>
                <FormattedMessage id="home.whyBuildInCartesi.scalable.description" />
              </p>
            </div>
          </div>
          <div className={`${styles.cardLayout} col-lg-4 col-md-6`}>
            <div className={styles.bodyLayout}>
              <h2>
                <img src={versatileIconSvg} alt="" />
                <span>
                  <FormattedMessage id="home.whyBuildInCartesi.versatile.title" />
                </span>
              </h2>
              <p>
                <FormattedMessage id="home.whyBuildInCartesi.versatile.description" />
              </p>
            </div>
          </div>
          <div className={`${styles.cardLayout} col-lg-4 col-md-6`}>
            <div className={styles.bodyLayout}>
              <h2>
                <img src={easyToBuildIconSvg} alt="" />
                <span>
                  <FormattedMessage id="home.whyBuildInCartesi.easyToBuild.title" />
                </span>
              </h2>
              <p>
                <FormattedMessage id="home.whyBuildInCartesi.easyToBuild.description" />
              </p>
            </div>
          </div>
          <div className={`${styles.cardLayout} col-lg-4 col-md-6`}>
            <div className={styles.bodyLayout}>
              <h2>
                <img src={fullyDecentralizedIconSvg} alt="" />
                <span>
                  <FormattedMessage id="home.whyBuildInCartesi.fullyDecentralized.title" />
                </span>
              </h2>
              <p>
                <FormattedMessage id="home.whyBuildInCartesi.fullyDecentralized.description" />
              </p>
            </div>
          </div>
          <div className={`${styles.cardLayout} col-lg-4 col-md-6`}>
            <div className={styles.bodyLayout}>
              <h2>
                <img src={portableIconSvg} alt="" />
                <span>
                  <FormattedMessage id="home.whyBuildInCartesi.portable.title" />
                </span>
              </h2>
              <p>
                <FormattedMessage id="home.whyBuildInCartesi.portable.description" />
              </p>
            </div>
          </div>
          <div className={`${styles.cardLayout} col-lg-4 col-md-6`}>
            <div className={styles.bodyLayout}>
              <h2>
                <img src={privateIconSvg} alt="" />
                <span>
                  <FormattedMessage id="home.whyBuildInCartesi.private.title" />
                </span>
              </h2>
              <p>
                <FormattedMessage id="home.whyBuildInCartesi.private.description" />
              </p>
            </div>
          </div>
        </RowComp>
        <RowComp className={styles.btnGroup}>
          <div className={initialStyles.btnsList}>
            <Link to={`${window.location.pathname}docs`}>
              <button className={initialStyles.btnDefault}>
                <FormattedMessage id="home.whyBuildInCartesi.button.startBuildingToday" />
              </button>
            </Link>
          </div>
        </RowComp>
      </div>
    </div>
  </div>
)
export default WhyBuildInCartesi
