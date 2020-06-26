import React from "react"

import meetStyles from "./meet.module.scss"
import { defineMessages, FormattedMessage } from "gatsby-plugin-intl"
import erickPhoto from "../../../images/aboutCartesi/team01.svg"
import colinPhoto from "../../../images/aboutCartesi/team03.svg"
import augustuPhoto from "../../../images/aboutCartesi/team04.svg"
import diegoPhoto from "../../../images/aboutCartesi/team02.svg"

const Meet = () => {
  const team = [
    defineMessages({
      person: {
        id: 1,
        name: "aboutCartesi.meet.person01.name",
        office: "aboutCartesi.meet.person01.office",
        photo: erickPhoto,
      },
    }),
    defineMessages({
      person: {
        id: 2,
        name: "aboutCartesi.meet.person02.name",
        office: "aboutCartesi.meet.person02.office",
        photo: colinPhoto,
      },
    }),
    defineMessages({
      person: {
        id: 3,
        name: "aboutCartesi.meet.person03.name",
        office: "aboutCartesi.meet.person03.office",
        photo: augustuPhoto,
      },
    }),
    defineMessages({
      person: {
        id: 4,
        name: "aboutCartesi.meet.person04.name",
        office: "aboutCartesi.meet.person04.office",
        photo: diegoPhoto,
      },
    }),
  ]
  let cardsTeam = team.map(item => {
    return (
      <div
        className={["col-sm card", meetStyles.cardsTeam].join(" ")}
        key={item.person.id}
      >
        <div className="row justify-content-center">
          <div className={meetStyles.photoTeam}>
            <img src={item.person.photo} alt={`photo${item.person.id}`} />
          </div>
        </div>
        <h6>
          {" "}
          <FormattedMessage id={item.person.name} />{" "}
        </h6>
        <p>
          <FormattedMessage id={item.person.office} />
        </p>
      </div>
    )
  })

  return (
    <div className={meetStyles.meet}>
      <div className={["container", meetStyles.contentMeet].join(" ")}>
        <div className={meetStyles.title}>
          <FormattedMessage id="aboutCartesi.meet.title" />
        </div>
        <div className={meetStyles.teamBlock}>{cardsTeam}</div>
      </div>
    </div>
  )
}

export default Meet
