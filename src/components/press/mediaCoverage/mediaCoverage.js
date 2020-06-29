import React from "react"

import { RowComp } from "../../bootstrap.components"
import { FormattedMessage } from "gatsby-plugin-intl"

import mediaCoverage from "./mediaCoverage.module.scss"

const MediaCoverage = () => {
  return (
    <div>
      <div className={mediaCoverage.container}>
        <div className={mediaCoverage.boxCenter}>
          <RowComp className={mediaCoverage.title} xs={1} md={1} lg={1} xl={1}>
            <h1>
              <FormattedMessage id="press.mediaCoverage.title" />
            </h1>
          </RowComp>
          <RowComp
            className={mediaCoverage.subTitle}
            xs={1}
            md={1}
            lg={1}
            xl={1}
          >
            <p>
              <FormattedMessage id="press.mediaCoverage.description" />
            </p>
          </RowComp>
        </div>
      </div>
    </div>
  )
}

export default MediaCoverage
