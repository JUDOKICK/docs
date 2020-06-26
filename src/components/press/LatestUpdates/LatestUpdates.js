import React from 'react'

import { RowComp } from "../../bootstrap.components"
import { FormattedMessage } from "gatsby-plugin-intl"

import latestUpdates from "./latestUpdates.module.scss"
import News from '../../news/news'

const LatestUpdates = props => {
    return (
        <div>
      <div className={latestUpdates.container}>
        <div className={latestUpdates.boxCenter}>
          <RowComp className={latestUpdates.title} xs={1} md={1} lg={1} xl={1}>
            <h1>
              <FormattedMessage id="press.latestUpdates.title" />
            </h1>
          </RowComp>
          <RowComp
            className={latestUpdates.subTitle}
            xs={1}
            md={1}
            lg={2}
            xl={1}
          >
            {/*<News />*/}
            <h1>updates</h1>
          </RowComp>
        </div>
      </div>
    </div>
    )
}

LatestUpdates.propTypes = {

}

export default LatestUpdates
