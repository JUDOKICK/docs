import React from "react"

import advisorsStyles from "./advisors.module.scss"
import { FormattedMessage, defineMessages } from "gatsby-plugin-intl"

const Advisors = () => {
  const dataAdvisors = [
    defineMessages({
      person: {
        id: 1,
        name: "aboutCartesi.advisors.person01.name",
        office01: "aboutCartesi.advisors.person01.office01",
        office02: "aboutCartesi.advisors.person01.office02",
        link: "https://www.linkedin.com/in/serguei-popov-631bb762/",
      },
    }),
    defineMessages({
      person: {
        id: 2,
        name: "aboutCartesi.advisors.person02.name",
        office01: "aboutCartesi.advisors.person02.office01",
        office02: "aboutCartesi.advisors.person02.office02",
        link: "https://www.linkedin.com/in/stasoskin/",
      },
    }),
    defineMessages({
      person: {
        id: 3,
        name: "aboutCartesi.advisors.person03.name",
        office01: "aboutCartesi.advisors.person03.office01",
        office02: "aboutCartesi.advisors.person03.office02",
        office03: "aboutCartesi.advisors.person03.office03",
        link: "https://www.linkedin.com/in/williambaobean/",
      },
    }),
    defineMessages({
      person: {
        id: 4,
        name: "aboutCartesi.advisors.person04.name",
        office01: "aboutCartesi.advisors.person04.office01",
        office02: "aboutCartesi.advisors.person04.office02",
        link:
          "https://www.linkedin.com/in/luiz-henrique-de-figueiredo-b2458313/",
      },
    }),
    defineMessages({
      person: {
        id: 5,
        name: "aboutCartesi.advisors.person05.name",
        office01: "aboutCartesi.advisors.person05.office01",
        office02: "aboutCartesi.advisors.person05.office02",
        link: "https://www.linkedin.com/in/boris-povod-361a1b79/",
      },
    }),
    defineMessages({
      person: {
        id: 6,
        name: "aboutCartesi.advisors.person06.name",
        office01: "aboutCartesi.advisors.person06.office01",
        office02: "aboutCartesi.advisors.person06.office02",
        link: "https://www.linkedin.com/in/marsninehwang/",
      },
    }),
    defineMessages({
      person: {
        id: 7,
        name: "aboutCartesi.advisors.person07.name",
        office01: "aboutCartesi.advisors.person07.office01",
        office02: "aboutCartesi.advisors.person07.office02",
        office03: "aboutCartesi.advisors.person07.office03",
        link: "https://www.linkedin.com/in/tkhamed/",
      },
    }),
  ]

  const advisors = dataAdvisors.map(item => {
    return (
      <div className={advisorsStyles.advisorsInfo} key={item.person.id}>
        <a
          href={item.person.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#000" }}
        >
          <h6 className={advisorsStyles.nameAdvisor}>
            <FormattedMessage id={item.person.name} />
          </h6>
          <p className={advisorsStyles.officeAdvisor}>
            <FormattedMessage id={item.person.office01} />
          </p>
          <p className={advisorsStyles.officeAdvisor}>
            <FormattedMessage id={item.person.office02} />
          </p>
          {item.person.office03 !== undefined ? (
            <p className={advisorsStyles.officeAdvisor}>
              <FormattedMessage id={item.person.office01} />
            </p>
          ) : null}
        </a>
      </div>
    )
  })

  return (
    <div className={advisorsStyles.advisors}>
      <div className={[advisorsStyles.title, "row"].join(" ")}>
        <FormattedMessage id="aboutCartesi.advisors.title" />
      </div>
      <div className={[advisorsStyles.blockAdvisors, "row"].join(" ")}>
        {advisors}
      </div>
    </div>
  )
}

export default Advisors
