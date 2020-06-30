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

          <a target="_blank"  rel="noopener noreferrer" aria-haspopup="true" aria-expanded="false" href="https://atomicwallet.io/">  
            <div className={styles.item}>
              <img src={atomicWalletPng} alt="" />
              <p>
                <FormattedMessage id="wallets.wallets.wallet.atomicWallet" />
              </p>
            </div>
          </a>

          <a target="_blank"  rel="noopener noreferrer" aria-haspopup="true" aria-expanded="false" href="https://www.ledger.com/">
            <div className={styles.item}>
              <img src={ledgerPng} alt="" />
              <p>
                <FormattedMessage id="wallets.wallets.wallet.ledger" />
              </p>
            </div>
          </a>

          <a target="_blank"  rel="noopener noreferrer" aria-haspopup="true" aria-expanded="false" href="https://mycrypto.com/">
            <div className={styles.item}>
              <img src={myCryptoPng} alt="" />
              <p>
                <FormattedMessage id="wallets.wallets.wallet.myCrypto" />
              </p>
            </div>  
          </ a>

          <a target="_blank" rel="noopener noreferrer" aria-haspopup="true" aria-expanded="false" href="https://trezor.io/">
              <div className={styles.item}>
                <img src={trezorPng} alt="" />
                <p>
                  <FormattedMessage id="wallets.wallets.wallet.trezor" />
                </p>
              </div>
            </a>

          <a target="_blank" rel="noopener noreferrer" aria-haspopup="true" aria-expanded="false" href="https://trustwallet.com/" >
            <div className={styles.item}>
              <img src={trustWalletPng} alt="" />
              <p>
                <FormattedMessage id="wallets.wallets.wallet.trustWallet" />
              </p>
            </div>
          </a>
          
        </RowComp>
      </div>
    </div>
  </div>
)
export default WhyBuildInCartesi
