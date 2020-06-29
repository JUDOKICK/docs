import React from "react"

import channelsStyles from "./channels.module.scss"
import { FormattedMessage, defineMessages } from "gatsby-plugin-intl"
import bgImage from "../../../images/community/outlines.svg"
import telegramIcon from "../../../images/community/Vectortelegram.svg"
import mediumIcon from "../../../images/community/Vectormedium.svg"
import discordIcon from "../../../images/community/Vectordiscord.svg"
import githubIcon from "../../../images/community/Vectorgithub.svg"
import twitterIcon from "../../../images/community/Vector.svg"
import facebookIcon from "../../../images/community/Vector-1.svg"
import redditIcon from "../../../images/community/Vector-2.svg"
import linkedInIcon from "../../../images/community/Vector-3.svg"

const Channels = () => {
  const itemsChanels = [
    defineMessages({
      person: {
        id: 1,
        title: "community.channels.telegram.title",
        button: "community.channels.telegram.button",
        icon: telegramIcon,
        bgCircle: "linear-gradient(203.2deg, #37AEE2 21.67%, #1E96C8 70%)",
        link: "https://t.me/cartesiannouncements",
      },
    }),
    defineMessages({
      person: {
        id: 2,
        title: "community.channels.medium.title",
        button: "community.channels.medium.button",
        icon: mediumIcon,
        bgCircle: "#12100E",
        link: "https://medium.com/cartesi",
      },
    }),
    defineMessages({
      person: {
        id: 3,
        title: "community.channels.discord.title",
        button: "community.channels.discord.button",
        icon: discordIcon,
        bgCircle: "#7289DA",
        link: "",
      },
    }),
    defineMessages({
      person: {
        id: 4,
        title: "community.channels.github.title",
        button: "community.channels.github.button",
        icon: githubIcon,
        bgCircle: "#fff",
        link: "https://github.com/cartesi",
      },
    }),
    defineMessages({
      person: {
        id: 5,
        title: "community.channels.twitter.title",
        button: "community.channels.twitter.button",
        icon: twitterIcon,
        bgCircle: "#2DAAE1",
        link: "https://twitter.com/cartesiproject",
      },
    }),
    defineMessages({
      person: {
        id: 6,
        title: "community.channels.reddit.title",
        button: "community.channels.reddit.button",
        icon: redditIcon,
        bgCircle: " #FF4500",
        link: "https://www.reddit.com/r/cartesi",
      },
    }),
    defineMessages({
      person: {
        id: 7,
        title: "community.channels.facebook.title",
        button: "community.channels.facebook.button",
        icon: facebookIcon,
        bgCircle: "#3C5A9A",
        link: "https://www.facebook.com/cartesiproject",
      },
    }),
    defineMessages({
      person: {
        id: 8,
        title: "community.channels.linkedin.title",
        button: "community.channels.linkedin.button",
        icon: linkedInIcon,
        bgCircle: "#006699",
        link: "https://www.linkedin.com/company/cartesiproject/",
      },
    }),
  ]

  const cards = itemsChanels.map(item => {
    return (
      <div
        className={["col-sm card", channelsStyles.cardChannel].join(" ")}
        key={item.person.id}
      >
        <div className="row justify-content-center">
          <div
            className={channelsStyles.imgCard}
            style={{ background: item.person.bgCircle }}
          >
            <img src={item.person.icon} alt={item.person.title} />
          </div>
        </div>

        <h6 className={channelsStyles.titleCard}>
          <FormattedMessage id={item.person.title} />
        </h6>

        <a
          className={[channelsStyles.btnCard, "button"].join(" ")}
          href={item.person.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage id={item.person.button} />
        </a>
      </div>
    )
  })

  return (
    <div className={channelsStyles.channels}>
      <div className={["continer", channelsStyles.blockChannels].join(" ")}>
        <div className={["row", channelsStyles.title].join(" ")}>
          <FormattedMessage id="community.channels.title" />
        </div>
        <div className={channelsStyles.blockCards}>{cards}</div>
      </div>
      <img className={channelsStyles.bgImage} src={bgImage} alt="background" />
    </div>
  )
}

export default Channels
