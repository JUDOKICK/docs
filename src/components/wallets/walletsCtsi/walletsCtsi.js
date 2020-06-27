import React from "react"
import styles from "./walletsCtsi.module.scss"
import { RowComp } from "../../bootstrap.components"
import atomicWalletPng from "../../../images/wallets/wallets/atomic-wallet.png"
import ledgerPng from "../../../images/wallets/wallets/ledger.png"
import myCryptoPng from "../../../images/wallets/wallets/my-crypto.png"
import trezorPng from "../../../images/wallets/wallets/trezor.png"
import trustWalletPng from "../../../images/wallets/wallets/trust-wallet.png"

import { FormattedMessage } from "gatsby-plugin-intl"

const WhyBuildInCartesi = () => (
  <div>
    <div className={styles.layout}>
      <div className={["container-fluid", styles.blockContainer].join(" ")}>
        <RowComp className={styles.title}>
          <h1>
            <FormattedMessage id="wallets.wallets.title" />
          </h1>
        </RowComp>

        <RowComp className={styles.itemsGroup}>
          <div className={styles.item}>
            <img src={atomicWalletPng} alt="" />
            <p>
              <FormattedMessage id="wallets.wallets.wallet.atomicWallet" />
            </p>
          </div>
          <div className={styles.item}>
            <img src={ledgerPng} alt="" />
            <p>
              <FormattedMessage id="wallets.wallets.wallet.ledger" />
            </p>
          </div>
          <div className={styles.item}>
            <img src={myCryptoPng} alt="" />
            <p>
              <FormattedMessage id="wallets.wallets.wallet.myCrypto" />
            </p>
          </div>
          <div className={styles.item}>
            <img src={trezorPng} alt="" />
            <p>
              <FormattedMessage id="wallets.wallets.wallet.trezor" />
            </p>
          </div>
          <div className={styles.item}>
            <img src={trustWalletPng} alt="" />
            <p>
              <FormattedMessage id="wallets.wallets.wallet.trustWallet" />
            </p>
          </div>
        </RowComp>
      </div>
    </div>
  </div>
)
export default WhyBuildInCartesi
