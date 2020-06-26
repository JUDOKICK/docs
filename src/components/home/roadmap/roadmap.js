import React, { useState, useRef } from "react"
import roadmapStyle from "./roadmap.module.scss"
import initialStyles from "../initialPresentation/initial.module.scss"
import roadmapDesktopSvg from "../../../images/home/roadmap/roadmap-desktop.svg"
import roadmapMobileSvg from "../../../images/home/roadmap/roadmap-mobile.svg"

import { FormattedMessage } from "gatsby-plugin-intl"
import { RowComp } from "../../bootstrap.components"

const ArrowDownIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 66 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.99921 33.0007L33 63.0015L63.0008 33.0007"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

const Roadmap = () => {
  const [roadmapExpanded, setRoadmapExpanded] = useState(false)
  const roadmapRef = useRef(null)

  const expandRoadmap = () => {
    setRoadmapExpanded(!roadmapExpanded)
    if (roadmapRef.current && roadmapExpanded)
      setTimeout(() => {
        roadmapRef.current.scrollIntoView({
          block: "center",
          behavior: "smooth",
        })
      }, 800)
  }

  return (
    <div>
      <div className={roadmapStyle.roadmap}>
        <div className={roadmapStyle.title}>
          <h1>
            <FormattedMessage id="home.roadmap.title" />
          </h1>
        </div>
        <div
          className={`${roadmapStyle.roadmapDesktop} ${
            roadmapExpanded && roadmapStyle.expandRoadmap
          }`}
        >
          <img src={roadmapDesktopSvg} alt="Roadmap" />
        </div>
        <div
          className={`${roadmapStyle.roadmapMobile} ${
            roadmapExpanded && roadmapStyle.expandRoadmap
          }`}
        >
          <img src={roadmapMobileSvg} alt="Roadmap" />
        </div>
        <div
          className={roadmapStyle.expandButton}
          onClick={expandRoadmap}
          onKeyDown={expandRoadmap}
          ref={roadmapRef}
          role="button"
          tabIndex={0}
        >
          <p>
            {roadmapExpanded ? (
              <FormattedMessage id="home.roadmap.hideRoadmap" />
            ) : (
              <FormattedMessage id="home.roadmap.expandRoadmap" />
            )}
          </p>
          <div className={roadmapExpanded && roadmapStyle.arrowInverted}>
            <ArrowDownIcon />
          </div>
        </div>
        <RowComp className={roadmapStyle.btnGroup}>
          <div className={initialStyles.btnsList}>
            <button className={initialStyles.btnDefault}>
              <FormattedMessage id="home.howItWorks.button.learnMore" />
            </button>
          </div>
        </RowComp>
      </div>
    </div>
  )
}

export default Roadmap
