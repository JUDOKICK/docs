import React from "react"

import developmentStyles from "./development.module.scss"
import { FormattedMessage, defineMessages } from "gatsby-plugin-intl"

const Development = () => {
  const dataTeam = [
    defineMessages({
      person: {
        id: 1,
        name: "aboutCartesi.development.person01.name",
        office: "aboutCartesi.development.person01.office",
        link: "https://www.linkedin.com/in/danilotuler/",
      },
    }),
    defineMessages({
      person: {
        id: 2,
        name: "aboutCartesi.development.person02.name",
        office: "aboutCartesi.development.person02.office",
        link: "https://www.linkedin.com/in/felipe-argento-ba5494b2/",
      },
    }),
    defineMessages({
      person: {
        id: 3,
        name: "aboutCartesi.development.person03.name",
        office: "aboutCartesi.development.person03.office",
        link: "#",
      },
    }),
    defineMessages({
      person: {
        id: 4,
        name: "aboutCartesi.development.person04.name",
        office: "aboutCartesi.development.person04.office",
        link: "https://www.linkedin.com/in/victorfusco/",
      },
    }),
    defineMessages({
      person: {
        id: 5,
        name: "aboutCartesi.development.person05.name",
        office: "aboutCartesi.development.person05.office",
        link: "#",
      },
    }),
    defineMessages({
      person: {
        id: 6,
        name: "aboutCartesi.development.person06.name",
        office: "aboutCartesi.development.person06.office",
        link: "https://www.linkedin.com/in/fabiana-cecin-9983a919a/",
      },
    }),
    defineMessages({
      person: {
        id: 7,
        name: "aboutCartesi.development.person07.name",
        office: "aboutCartesi.development.person07.office",
        link: "https://www.linkedin.com/in/stephen-chen-65624851/",
      },
    }),
    defineMessages({
      person: {
        id: 9,
        name: "aboutCartesi.development.person09.name",
        office: "aboutCartesi.development.person09.office",
        link: "https://www.linkedin.com/in/milton-jonathan/",
      },
    }),
    defineMessages({
      person: {
        id: 10,
        name: "aboutCartesi.development.person10.name",
        office: "aboutCartesi.development.person10.office",
        link: "https://www.linkedin.com/in/gbbabarros",
      },
    }),
  ]

  const team = dataTeam.map(item => {
    return (
      <div className={developmentStyles.developerInfo} key={item.person.id}>
        <a
          href={item.person.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#000" }}
        >
          <h6 className={developmentStyles.nameDeveloper}>
            <FormattedMessage id={item.person.name} />
          </h6>
          <p className={developmentStyles.officeDeveloper}>
            <FormattedMessage id={item.person.office} />
          </p>
        </a>
      </div>
    )
  })

  return (
    <div className={developmentStyles.development} id="team">
      <div className={[developmentStyles.title, "row"].join(" ")}>
        <FormattedMessage id="aboutCartesi.development.title" />
      </div>
      <div className={[developmentStyles.blockTeam, "row"].join(" ")}>
        {team}
      </div>
    </div>
  )
}

export default Development
