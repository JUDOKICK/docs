import React, { useState } from "react"
import styles from "./exchanges.module.scss"
import { RowComp } from "../../bootstrap.components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons"
import binanceSvg from "../../../images/wallets/exchanges/binance.svg"
import wazirxSvg from "../../../images/wallets/exchanges/wazirx.svg"

import arrowSvg from "../../../images/wallets/exchanges/arrow.svg"

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
          <div className="col-md-6 col-lg-4 col-xl-3">
            <ButtonDropdown
              content={<img src={binanceSvg} alt="" />}
              color={"#F3BA2F"}
              links={[
                <a
                  href="https://www.binance.com/en/trade/CTSI_BTC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CTSI <FontAwesomeIcon icon={faExchangeAlt} /> BTC
                </a>,
                <a
                  href="https://www.binance.com/en/trade/CTSI_USDT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CTSI <FontAwesomeIcon icon={faExchangeAlt} /> USDT
                </a>,
                <a
                  href="https://www.binance.com/en/trade/CTSI_BNB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CTSI <FontAwesomeIcon icon={faExchangeAlt} /> BND
                </a>,
                <a
                  href="https://www.binance.com/en/trade/CTSI_BUSD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CTSI <FontAwesomeIcon icon={faExchangeAlt} /> BUSD
                </a>,
              ]}
            />
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <ButtonDropdown
              content={<img src={wazirxSvg} alt="" />}
              color={"#2994FF"}
              links={[
                <a
                  href="https://wazirx.com/exchange/CTSI-USDT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CTSI <FontAwesomeIcon icon={faExchangeAlt} /> USDT
                </a>,
              ]}
            />
          </div>
        </RowComp>
      </div>
    </div>
  </div>
)

function ButtonDropdown({ color, content, links }) {
  const [closed, setClosed] = useState(true)

  const openDropdown = () => {
    setClosed(!closed)
  }

  return (
    <div
      className={styles.btnDropdown}
      style={{ backgroundColor: color }}
      onClick={openDropdown}
      role="button"
    >
      <div className={styles.btnDropdownContent}>
        <span>{content}</span>
        <span>
          <img
            src={arrowSvg}
            alt=""
            className={`${styles.btnDropdownArrow} ${
              closed ? styles.dropdownClosed : ""
            }`}
          />
        </span>
      </div>
      <div
        className={`${styles.btnDropdownLinks} ${
          !closed ? styles.showBtnLinks : ""
        }`}
      >
        {links.map((link, key )=> {
          return <div key={key}>{link}</div>
        })}
      </div>
    </div>
  )
}

export default WhyBuildInCartesi
