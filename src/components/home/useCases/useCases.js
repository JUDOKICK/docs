import React from "react"
import styles from "./useCases.module.scss"
import initialStyles from "../initialPresentation/initial.module.scss"

import { RowComp, CardComp } from "../../bootstrap.components"
import case1IconSvg from "../../../images/home/use-cases/case1.svg"
import case2IconSvg from "../../../images/home/use-cases/case2.svg"
import case3IconSvg from "../../../images/home/use-cases/case3.svg"
import case4IconSvg from "../../../images/home/use-cases/case4.svg"
import case5IconSvg from "../../../images/home/use-cases/case5.svg"
import case6IconSvg from "../../../images/home/use-cases/case6.svg"

import creeptsBallSvg from "../../../images/home/use-cases/creepts-ball.svg"
import creeptsMultipleBallsSvg from "../../../images/home/use-cases/creepts-multiple-balls.svg"
import creeptsPyramidSvg from "../../../images/home/use-cases/creepts-pyramid.svg"
import towerLeftPng from "../../../images/home/use-cases/tower-left.png"
import towerRightPng from "../../../images/home/use-cases/tower-right.png"

import { FormattedMessage } from "gatsby-plugin-intl"

const UseCases = () => (
  <div>
    <div className={styles.layout}>
      <div className={["container-fluid", styles.blockContainer].join(" ")}>
        <RowComp className={styles.title}>
          <h1>
            <FormattedMessage id="home.useCases.title" />
          </h1>
        </RowComp>

        <RowComp className={styles.cardGroup}>
          <div className={styles.cardLightLayout}>
            <div className={styles.caseIconDesktop}>
              <img src={case1IconSvg} alt="" />
            </div>
            <div className={styles.cardBodyLayout}>
              <div className={styles.caseIconMobile}>
                <img src={case1IconSvg} alt="" />
              </div>
              <h2>
                <FormattedMessage id="home.useCases.deFi.title" />
              </h2>
              <p className={styles.descriptionDesktop}>
                <FormattedMessage id="home.useCases.deFi.description" />
              </p>
            </div>
            <p className={styles.descriptionMobile}>
              <FormattedMessage id="home.useCases.deFi.description" />
            </p>
          </div>

          <div className={styles.cardLightLayout}>
            <div className={styles.caseIconDesktop}>
              <img src={case2IconSvg} alt="" />
            </div>
            <div className={styles.cardBodyLayout}>
              <div className={styles.caseIconMobile}>
                <img src={case2IconSvg} alt="" />
              </div>
              <h2>
                <FormattedMessage id="home.useCases.gaming.title" />
              </h2>
              <p className={styles.descriptionDesktop}>
                <FormattedMessage id="home.useCases.gaming.description" />
              </p>
            </div>
            <p className={styles.descriptionMobile}>
              <FormattedMessage id="home.useCases.gaming.description" />
            </p>
          </div>

          <div className={styles.cardLightLayout}>
            <div className={styles.caseIconDesktop}>
              <img src={case3IconSvg} alt="" />
            </div>
            <div className={styles.cardBodyLayout}>
              <div className={styles.caseIconMobile}>
                <img src={case3IconSvg} alt="" />
              </div>
              <h2>
                <FormattedMessage id="home.useCases.machineLearning.title" />
              </h2>
              <p className={styles.descriptionDesktop}>
                <FormattedMessage id="home.useCases.machineLearning.description" />
              </p>
            </div>
            <p className={styles.descriptionMobile}>
              <FormattedMessage id="home.useCases.machineLearning.description" />
            </p>
          </div>

          <div className={styles.cardLightLayout}>
            <div className={styles.caseIconDesktop}>
              <img src={case4IconSvg} alt="" />
            </div>
            <div className={styles.cardBodyLayout}>
              <div className={styles.caseIconMobile}>
                <img src={case4IconSvg} alt="" />
              </div>
              <h2>
                <FormattedMessage id="home.useCases.theFutureOfAutomation.title" />
              </h2>
              <p className={styles.descriptionDesktop}>
                <FormattedMessage id="home.useCases.theFutureOfAutomation.description" />
              </p>
            </div>
            <p className={styles.descriptionMobile}>
              <FormattedMessage id="home.useCases.theFutureOfAutomation.description" />
            </p>
          </div>

          <div className={styles.cardLightLayout}>
            <div className={styles.caseIconDesktop}>
              <img src={case5IconSvg} alt="" />
            </div>
            <div className={styles.cardBodyLayout}>
              <div className={styles.caseIconMobile}>
                <img src={case5IconSvg} alt="" />
              </div>
              <h2>
                <FormattedMessage id="home.useCases.logistics.title" />
              </h2>
              <p className={styles.descriptionDesktop}>
                <FormattedMessage id="home.useCases.logistics.description" />
              </p>
            </div>
            <p className={styles.descriptionMobile}>
              <FormattedMessage id="home.useCases.logistics.description" />
            </p>
          </div>
          <div className={styles.cardLightLayout}>
            <div className={styles.caseIconDesktop}>
              <img src={case6IconSvg} alt="" />
            </div>
            <div className={styles.cardBodyLayout}>
              <div className={styles.caseIconMobile}>
                <img src={case6IconSvg} alt="" />
              </div>
              <h2>
                <FormattedMessage id="home.useCases.research.title" />
              </h2>
              <p className={styles.descriptionDesktop}>
                <FormattedMessage id="home.useCases.research.description" />
              </p>
            </div>
            <p className={styles.descriptionMobile}>
              <FormattedMessage id="home.useCases.research.description" />
            </p>
          </div>
        </RowComp>
        <RowComp className={styles.cardGroup}>
          <CardComp className={styles.cardLayout}>
            <h2>
              <FormattedMessage id="home.useCases.creeptsTowerDefense.title" />
            </h2>
            <h3>
              <FormattedMessage id="home.useCases.creeptsTowerDefense.subtitle" />
            </h3>
            <div className={styles.btnGroup}>
              <div className={initialStyles.btnsList}>
                <button className={initialStyles.btnDefault}>
                  <FormattedMessage id="home.useCases.creeptsTowerDefense.playNow" />
                </button>
              </div>
            </div>
            <img
              src={creeptsBallSvg}
              className={styles.creeptsBallSvg}
              alt=""
            />
            <img
              src={creeptsMultipleBallsSvg}
              className={styles.creeptsMultipleBallsSvg}
              alt=""
            />
            <img src={towerLeftPng} className={styles.towerLeft} alt="" />
            <img src={towerRightPng} className={styles.towerRight} alt="" />
            <img
              src={creeptsPyramidSvg}
              className={styles.creeptsPyramid}
              alt=""
            />
          </CardComp>
        </RowComp>
      </div>
    </div>
  </div>
)
export default UseCases
