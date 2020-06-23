import React from "react"

import shapingTheFuture from "./shapingTheFuture.module.scss"
import { RowComp } from "../bootstrap.components"
import { FormattedMessage } from "gatsby-plugin-intl"

const ShapingTheFuture = () => {
  return (
    <div>
      <div className={shapingTheFuture.container}>
        <div className={shapingTheFuture.boxCenter}>
          <RowComp
            className={shapingTheFuture.title}
            xs={1}
            md={1}
            lg={1}
            xl={1}
          >
            <h1>
              <FormattedMessage id="provide.title" />
            </h1>
          </RowComp>
          <RowComp
            className={shapingTheFuture.subTitle}
            xs={1}
            md={1}
            lg={2}
            xl={1}
          >
            <p>
              <FormattedMessage id="provide.description" />
            </p>
          </RowComp>
        </div>
      </div>
    </div>
  )
}

export default ShapingTheFuture
