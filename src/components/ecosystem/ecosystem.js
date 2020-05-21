import React from "react"
import ecosystemStyle from "./ecosystem.module.scss"
import binance from "../../images/SVG/ecosystem/binance.svg"
import atomic from "../../images/SVG/ecosystem/atomic.svg"
import blockfolio from "../../images/SVG/ecosystem/blockfolio.svg"
import coin from "../../images/SVG/ecosystem/coin.svg"
import delta from "../../images/SVG/ecosystem/delta.svg"
import trust from "../../images/SVG/ecosystem/trust.svg"
import { FormattedMessage } from "gatsby-plugin-intl"

const Ecosystem = () => {
  return (
    <div>
      <div className={ecosystemStyle.ecosystem}>
        <div className={ecosystemStyle.title}>
          <h1>
            <FormattedMessage id="ecosystem.title" />
          </h1>
          <div className={ecosystemStyle.subtitle}>
            <p>
              <FormattedMessage id="ecosystem.description" />
            </p>
          </div>
        </div>
        <div
          className={[
            "row justify-content-center",
            ecosystemStyle.rowCards,
          ].join(" ")}
        >
          <div className={["col-sm card", ecosystemStyle.ecoCards].join(" ")}>
            <div className="row justify-content-center">
              <div className={ecosystemStyle.binance}>
                <img src={binance} alt="Biance" />
              </div>
            </div>

            <h6>
              <FormattedMessage id="ecosystem.partners.binance.title" />
            </h6>
            <p>
              <FormattedMessage id="ecosystem.partners.binance.description" />
            </p>
          </div>

          <div className={["col-sm card", ecosystemStyle.ecoCards].join(" ")}>
            <div className="row justify-content-center">
              <div className={ecosystemStyle.trust}>
                <img src={trust} alt="Trust" />
              </div>
            </div>

            <h6>
              <FormattedMessage id="ecosystem.partners.trust.title" />
            </h6>
            <p>
              <FormattedMessage id="ecosystem.partners.trust.description" />
            </p>
          </div>
          <div className={["col-sm card", ecosystemStyle.ecoCards].join(" ")}>
            <div className="row justify-content-center">
              <div className={ecosystemStyle.atomic}>
                <img src={atomic} alt="Atomic" />
              </div>
            </div>

            <h6>
              <FormattedMessage id="ecosystem.partners.atomic.title" />
            </h6>
            <p>
              <FormattedMessage id="ecosystem.partners.atomic.description" />
            </p>
          </div>
          <div className={["col-sm card", ecosystemStyle.ecoCards].join(" ")}>
            <div className="row justify-content-center">
              <div className={ecosystemStyle.blockfolio}>
                <img src={blockfolio} alt="Blockfolio" />
              </div>
            </div>
            <h6>
              <FormattedMessage id="ecosystem.partners.blockfolio.title" />
            </h6>
            <p>
              <FormattedMessage id="ecosystem.partners.blockfolio.description" />
            </p>
          </div>
          <div className={["col-sm card", ecosystemStyle.ecoCards].join(" ")}>
            <div className="row justify-content-center">
              <div className={ecosystemStyle.delta}>
                <img src={delta} alt="Delta" />
              </div>
            </div>
            <h6>
              <FormattedMessage id="ecosystem.partners.delta.title" />
            </h6>
            <p>
              <FormattedMessage id="ecosystem.partners.delta.description" />
            </p>
          </div>
          <div className={["col-sm card", ecosystemStyle.ecoCards].join(" ")}>
            <div className="row justify-content-center">
              <div className={ecosystemStyle.coin}>
                <img src={coin} alt="Coin" />
              </div>
            </div>
            <h6>
              <FormattedMessage id="ecosystem.partners.coin.title" />
            </h6>
            <p>
              <FormattedMessage id="ecosystem.partners.coin.description" />
            </p>
          </div>
        </div>
        <div className={[ecosystemStyle.exploreButton, "row"].join(" ")}>
          <div className="col-sm">
            <button>
              <FormattedMessage id="ecosystem.discovery.title" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecosystem
