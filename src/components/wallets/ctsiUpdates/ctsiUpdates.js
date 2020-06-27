import React from "react"
import styles from "./ctsiUpdates.module.scss"
import { RowComp } from "../../bootstrap.components"
import blockfolioPng from "../../../images/wallets/updates/blockfolio.png"
import deltaPng from "../../../images/wallets/updates/delta.png"
import coinMarketCapPng from "../../../images/wallets/updates/coinmarketcap.png"
import coinGeckoPng from "../../../images/wallets/updates/coingecko.png"
import blockfolioSignalPng from "../../../images/wallets/updates/blockfolio-signal.png"
import deltaDirectPng from "../../../images/wallets/updates/delta-direct.png"

import { FormattedMessage } from "gatsby-plugin-intl"

const WhyBuildInCartesi = () => (
  <div>
    <div className={styles.layout}>
      <div className={["container-fluid", styles.blockContainer].join(" ")}>
        <RowComp className={styles.title}>
          <h1>
            <FormattedMessage id="wallets.ctsiUpdates.title" />
          </h1>
        </RowComp>

        <RowComp className={styles.itemsGroup}>
          <div className={styles.item}>
            <img src={blockfolioPng} alt="" />
            <p>
              <FormattedMessage id="wallets.ctsiUpdates.updates.blockfolio" />
            </p>
          </div>
          <div className={styles.item}>
            <img src={deltaPng} alt="" />
            <p>
              <FormattedMessage id="wallets.ctsiUpdates.updates.delta" />
            </p>
          </div>
          <div className={styles.item}>
            <img src={coinMarketCapPng} alt="" />
            <p>
              <FormattedMessage id="wallets.ctsiUpdates.updates.coinMarketCap" />
            </p>
          </div>
          <div className={styles.item}>
            <img src={coinGeckoPng} alt="" />
            <p>
              <FormattedMessage id="wallets.ctsiUpdates.updates.coinGecko" />
            </p>
          </div>
          <div className={styles.item}>
            <img src={blockfolioSignalPng} alt="" />
            <p>
              <FormattedMessage id="wallets.ctsiUpdates.updates.blockfolioSignal" />
            </p>
          </div>
          <div className={styles.item}>
            <img src={deltaDirectPng} alt="" />
            <p>
              <FormattedMessage id="wallets.ctsiUpdates.updates.deltaDirect" />
            </p>
          </div>
        </RowComp>
      </div>
    </div>
  </div>
)
export default WhyBuildInCartesi
