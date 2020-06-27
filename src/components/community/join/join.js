import React from "react"

import joinStyles from "./join.module.scss"

const Join = () => {
  return (
    <div className={joinStyles.join}>
      <div className={[joinStyles.blockTitles, "col"].join(" ")}>
        <h1 className={joinStyles.title}></h1>
        <p className={joinStyles.description}></p>
      </div>
      <img className={joinStyles.outline} src="#" alt="#" />
    </div>
  )
}

export default Join
