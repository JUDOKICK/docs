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
      },
    }),
    defineMessages({
      person: {
        id: 2,
        name: "aboutCartesi.development.person02.name",
        office: "aboutCartesi.development.person02.office",
      },
    }),
    defineMessages({
      person: {
        id: 3,
        name: "aboutCartesi.development.person03.name",
        office: "aboutCartesi.development.person03.office",
      },
    }),
    defineMessages({
      person: {
        id: 4,
        name: "aboutCartesi.development.person04.name",
        office: "aboutCartesi.development.person04.office",
      },
    }),
    defineMessages({
      person: {
        id: 5,
        name: "aboutCartesi.development.person05.name",
        office: "aboutCartesi.development.person05.office",
      },
    }),
    defineMessages({
      person: {
        id: 6,
        name: "aboutCartesi.development.person06.name",
        office: "aboutCartesi.development.person06.office",
      },
    }),
    defineMessages({
      person: {
        id: 7,
        name: "aboutCartesi.development.person07.name",
        office: "aboutCartesi.development.person07.office",
      },
    }),
    defineMessages({
      person: {
        id: 8,
        name: "aboutCartesi.development.person08.name",
        office: "aboutCartesi.development.person08.office",
      },
    }),
  ]

  const team = dataTeam.map(item => {
    return (
      <div className={developmentStyles.developerInfo} key={item.person.id}>
        <h6 className={developmentStyles.nameDeveloper}>
          <FormattedMessage id={item.person.name} />
        </h6>
        <p className={developmentStyles.officeDeveloper}>
          <FormattedMessage id={item.person.office} />
        </p>
      </div>
    )
  })

  return (
    <div className={developmentStyles.development}>
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
