import React from "react"

import styles from "./walletsExchanges.module.scss"
import { RowComp } from "../../bootstrap.components"
import { FormattedMessage } from "gatsby-plugin-intl"

const WalletsExchanges = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.boxCenter}>
          <RowComp className={styles.title}>
            <h1>
              <FormattedMessage id="wallets.initial.title" />
            </h1>
          </RowComp>
          <RowComp className={styles.subTitle}>
            <p>
              <FormattedMessage id="wallets.initial.description" />
            </p>
          </RowComp>
        </div>
      </div>
    </div>
  )
}

export default WalletsExchanges
