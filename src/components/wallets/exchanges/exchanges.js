import React from "react"
import styles from "./exchanges.module.scss"
import { RowComp } from "../../bootstrap.components"
import binancePng from "../../../images/wallets/exchanges/binance.png"
import wazirxPng from "../../../images/wallets/exchanges/wazirx.png"
import gateioPng from "../../../images/wallets/exchanges/gateio.png"

import { FormattedMessage } from "gatsby-plugin-intl"

const WhyBuildInCartesi = () => (
  <div>
    <div className={styles.layout}>
      <div className={["container-fluid", styles.blockContainer].join(" ")}>
        <RowComp className={styles.title}>
          <h1>
            <FormattedMessage id="wallets.exchanges.title" />
          </h1>
        </RowComp>

        <RowComp className={styles.itemsGroup}>
          <div className="col-md-3">
            <img src={binancePng} alt="" />
          </div>
          <div className="col-md-3">
            <img src={wazirxPng} alt="" />
          </div>
        </RowComp>
      </div>
    </div>
  </div>
)
export default WhyBuildInCartesi
