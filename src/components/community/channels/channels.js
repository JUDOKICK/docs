import React from "react"

import channelsStyles from "./channels.module.scss"
import { FormattedMessage, defineMessages } from "gatsby-plugin-intl"
import bgImage from "../../../images/community/outlines.svg"
import telegramIcon from "../../../images/community/Vector.svg"

const Channels = () => {
  const itemsChanels = [
    defineMessages({
      person: {
        id: 1,
        title: "community.channels.telegram.title",
        button: "community.channels.telegram.button",
        icon: telegramIcon,
      },
    }),
  ]

  const cards = itemsChanels.map(item => {
    return (
      <div className="cardChannel" key={item.person.id}>
        <div className={["col-sm card", channelsStyles.cardChannel].join(" ")}>
          <div className="row justify-content-center">
            <div className={channelsStyles.imgCard}>
              <img src={item.person.img} alt={item.person.title} />
            </div>
          </div>

          <h6>
            <FormattedMessage id={item.person.title} />
          </h6>
          <button>
            <FormattedMessage id="ecosystem.partners.trust.description" />
          </button>
        </div>
      </div>
    )
  })

  return (
    <div className={channelsStyles.channels}>
      <div className="continer blockChannels">
        <div className="row title">
          <FormattedMessage id="community.channels.title" />
        </div>
        <div className="blockCards">{cards}</div>
      </div>
      <img src={bgImage} alt="background image" />
    </div>
  )
}

export default Channels
