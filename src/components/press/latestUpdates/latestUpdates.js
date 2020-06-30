import React from 'react'

import { FormattedMessage } from "gatsby-plugin-intl"

import latestUpdates from "./latestUpdates.module.scss"
import News from '../../news/news'
import { injectIntl } from "gatsby-plugin-intl"


const LatestUpdates = () => {
    return (
      <div className={latestUpdates.container}>
          <div className={latestUpdates.boxCenter}>
            <News title={<FormattedMessage id="press.latestUpdates.title" />} limit={6}/>

            <a target="_blanj" rel="noopener noreferrer" title="Medium" href="https://medium.com/cartesi">
              <button className={latestUpdates.btnDefault}>
                <FormattedMessage id="press.latestUpdates.more.title" />
              </button>
            </a>
          </div>
      </div>
    )
}

export default injectIntl(LatestUpdates)
