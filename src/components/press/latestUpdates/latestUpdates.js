import React from 'react'

import { FormattedMessage } from "gatsby-plugin-intl"

import latestUpdates from "./latestUpdates.module.scss"
import News from '../../news/news'

const LatestUpdates = () => {
    return (
      <div className={latestUpdates.container}>
          <div className={latestUpdates.boxCenter}>
            <News title={<FormattedMessage id="press.latestUpdates.title" />} limit={6}/>

            <button className={latestUpdates.btnDefault}>
              <FormattedMessage id="press.latestUpdates.more.title" />
            </button>
          </div>
      </div>
    )
}

export default LatestUpdates
