import React from "react"
import styles from "./partners.module.scss"
import { RowComp } from "../../bootstrap.components"
import partnersLeftPng from "../../../images/home/partners/partners-left.png"
import partnersRightPng from "../../../images/home/partners/partners-right.png"
import outermeshSvg from "../../../images/home/partners/outermesh-partners.svg"

import { FormattedMessage } from "gatsby-plugin-intl"

const Partners = () => (
  <div>
    <div className={styles.layout}>
      <div className={["container-fluid", styles.blockContainer].join(" ")}>
        <RowComp className={styles.title}>
          <h1>
            <FormattedMessage id="home.partners.title" />
          </h1>
        </RowComp>
        <RowComp className={styles.partnersContainer}>
          <div>
            <img src={partnersLeftPng} alt="" />
          </div>
          <div style={{ marginLeft: "-2px" }}>
            <img src={partnersRightPng} alt="" />
          </div>
        </RowComp>
        <img className={styles.svgLeft} src={outermeshSvg} alt="Lines left" />
      </div>
    </div>
  </div>
)
export default Partners
