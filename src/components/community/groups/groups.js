import React from "react"

import groupsStyles from "./groups.module.scss"
import { FormattedMessage, defineMessages } from "gatsby-plugin-intl"
import telegramIcon from "../../../images/community/Vectortelegram.svg"
import weChatIcon from "../../../images/community/msg-vector.svg"
import ReactCountryFlag from "react-country-flag"

const Groups = () => {
  const itemsGroups = [
    defineMessages({
      person: {
        id: 1,
        title: "community.groups.russo.title",
        button: "community.groups.russo.button",
        icon: telegramIcon,
        bgCircle: "#2DA4D8",
        link: "https://t.me/CartesiRU",
        code: "community.groups.russo.country",
      },
    }),
    defineMessages({
      person: {
        id: 2,
        title: "community.groups.chines.title",
        button: "community.groups.chines.button",
        icon: telegramIcon,
        bgCircle: "#2DA4D8",
        link: "https://t.me/CartesiCN",
        code: "community.groups.chines.country",
      },
    }),
    defineMessages({
      person: {
        id: 3,
        title: "community.groups.chines2.title",
        button: "community.groups.chines2.button",
        icon: weChatIcon,
        bgCircle: "#25DF73",
        link: "Emmanuel-111",
        code: "community.groups.chines2.country",
      },
    }),
    defineMessages({
      person: {
        id: 4,
        title: "community.groups.turkey.title",
        button: "community.groups.turkey.button",
        icon: telegramIcon,
        bgCircle: "#2DA4D8",
        link: "https://t.me/CartesiTR",
        code: "community.groups.turkey.country",
      },
    }),
    defineMessages({
      person: {
        id: 5,
        title: "community.groups.vietnam.title",
        button: "community.groups.vietnam.button",
        icon: telegramIcon,
        bgCircle: "#2DA4D8",
        link: "https://t.me/CartesiVN",
        code: "community.groups.vietnam.country",
      },
    }),
    defineMessages({
      person: {
        id: 6,
        title: "community.groups.korea.title",
        button: "community.groups.korea.button",
        icon: telegramIcon,
        bgCircle: "#2DA4D8",
        link: "https://t.me/CartesiKR",
        code: "community.groups.korea.country",
      },
    }),
    defineMessages({
      person: {
        id: 7,
        title: "community.groups.india.title",
        button: "community.groups.india.button",
        icon: telegramIcon,
        bgCircle: "#2DA4D8",
        link: "https://t.me/c",
        code: "community.groups.india.country",
      },
    }),
  ]

  const cards = itemsGroups.map(item => {
    return (
      <div
        className={["col-sm card", groupsStyles.cardGroup].join(" ")}
        key={item.person.id}
      >
        <div className="row justify-content-center">
          <div
            className={groupsStyles.imgCard}
            style={{ background: item.person.bgCircle }}
          >
            <img src={item.person.icon} alt={item.person.title} />
          </div>
        </div>

        <h6 className={groupsStyles.titleCard}>
          <FormattedMessage id={item.person.code}>
            {code => (
              <ReactCountryFlag
                countryCode={code}
                svg
                style={{
                  width: "1.6rem",
                  height: "1rem",
                }}
                title={code}
              />
            )}
          </FormattedMessage>{" "}
          <FormattedMessage id={item.person.title} />
        </h6>
        <a
          className={[groupsStyles.btnCard, "button"].join(" ")}
          href={item.person.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* {item.person.link === "Emmanuel-111" ? (
            <span className={groupsStyles.btnTooltip}>{item.person.link}</span>
          ) : (
            ""
          )} */}

          <FormattedMessage id={item.person.button} />
        </a>
      </div>
    )
  })

  return (
    <div className={groupsStyles.groups}>
      <div className={["continer", groupsStyles.blockGroups].join(" ")}>
        <div className={["row", groupsStyles.title].join(" ")}>
          <FormattedMessage id="community.groups.title" />
        </div>
        <div className={groupsStyles.blockCards}>{cards}</div>
      </div>
    </div>
  )
}

export default Groups
