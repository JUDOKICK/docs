import React from "react"
import styles from "./partners.module.scss"
import { RowComp } from "../../bootstrap.components"
import partnersLeftSvg from "../../../images/home/partners/partners-left.svg"
import partnersRightSvg from "../../../images/home/partners/partners-right.svg"
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
            <img src={partnersLeftSvg} alt="" />
          </div>
          <div>
            <img src={partnersRightSvg} alt="" />
          </div>
        </RowComp>
        <img className={styles.svgLeft} src={outermeshSvg} alt="Lines left" />
      </div>
    </div>
  </div>
)
export default Partners
