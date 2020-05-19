import React from "react"
import buildAnythingStyle from "./buildAnything.module.scss"
import figDefi from "../../images/SVG/buildAnything/defi.svg"
import figML from "../../images/SVG/buildAnything/machineLearning.svg"
import figLogistics from "../../images/SVG/buildAnything/logistics.svg"
import figGame from "../../images/SVG/buildAnything/gaming.svg"
import figFuture from "../../images/SVG/buildAnything/theFuture.svg"
import figResearch from "../../images/SVG/buildAnything/research.svg"
import { FormattedMessage } from "gatsby-plugin-intl"

const BuildAnything = () => {
  return (
    <div>
      <div className={buildAnythingStyle.buildAnything}>
        <div className={buildAnythingStyle.title}>
          <h1>
            <FormattedMessage id="buildAnything.title" />
          </h1>
        </div>
        <div className={[buildAnythingStyle.block, "row"].join(" ")}>
          <div className={["col-sm", buildAnythingStyle.columnOne].join(" ")}>
            <div className={buildAnythingStyle.buildWith}>
              <div className="col-xs">
                <img src={figDefi} alt="DeFi" />
              </div>
              <div className={["col-sm", buildAnythingStyle.smCol].join(" ")}>
                <h5>
                  <FormattedMessage id="buildAnything.defi.title" />
                </h5>
                <p>
                  <FormattedMessage id="buildAnything.defi.description" />
                </p>
              </div>
            </div>
            <div className={buildAnythingStyle.buildWith}>
              <div className="col-xs">
                <img src={figML} alt="Machine Learning" />
              </div>
              <div className={["col-sm", buildAnythingStyle.smCol].join(" ")}>
                <h5>
                  <FormattedMessage id="buildAnything.machineLearning.title" />
                </h5>
                <p>
                  <FormattedMessage id="buildAnything.machineLearning.description" />
                </p>
              </div>
            </div>
            <div className={buildAnythingStyle.buildWith}>
              <div className="col-xs">
                <img src={figLogistics} alt="Logistics" />
              </div>
              <div className={["col-sm", buildAnythingStyle.smCol].join(" ")}>
                <h5>
                  <FormattedMessage id="buildAnything.logistics.title" />
                </h5>
                <p>
                  <FormattedMessage id="buildAnything.logistics.description" />
                </p>
              </div>
            </div>
          </div>
          <div className={["col", buildAnythingStyle.columnSecond].join(" ")}>
            <div className={buildAnythingStyle.buildWith}>
              <div className="col-xs">
                <img src={figGame} alt="Gaming" />
              </div>
              <div className={["col-sm", buildAnythingStyle.smCol].join(" ")}>
                <h5>
                  <FormattedMessage id="buildAnything.gaming.title" />
                </h5>
                <p>
                  <FormattedMessage id="buildAnything.gaming.description" />
                </p>
              </div>
            </div>
            <div className={buildAnythingStyle.buildWith}>
              <div className="col-xs">
                <img src={figFuture} alt="#" />
              </div>
              <div className={["col-sm", buildAnythingStyle.smCol].join(" ")}>
                <h5>
                  <FormattedMessage id="buildAnything.future.title" />
                </h5>
                <p>
                  <FormattedMessage id="buildAnything.future.description" />
                </p>
              </div>
            </div>
            <div className={buildAnythingStyle.buildWith}>
              <div className="col-xs">
                <img src={figResearch} alt="Research" />
              </div>
              <div className={["col-sm", buildAnythingStyle.smCol].join(" ")}>
                <h5>
                  <FormattedMessage id="buildAnything.research.title" />
                </h5>
                <p>
                  <FormattedMessage id="buildAnything.research.description" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuildAnything
