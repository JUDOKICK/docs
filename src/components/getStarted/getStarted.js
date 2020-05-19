import React from "react"
import getStartedStyle from "./getStarted.module.scss"
import { TabComp, TabsComp } from "../bootstrap.components"
import figDeveloper from "../../images/SVG/getStarted/cartesiDevelopers.svg"
import { FormattedMessage } from "gatsby-plugin-intl"
import star from "../../images/SVG/getStarted/star.svg"
import commits from "../../images/SVG/getStarted/commits.svg"
import contributors from "../../images/SVG/getStarted/contributors.svg"
import solidity from "../../images/SVG/getStarted/solidity.svg"
import github from "../../images/SVG/getStarted/github.svg"
import Code from "./code/code"

const GetStarted = () => {
  return (
    <div>
      <div className={getStartedStyle.getStarted}>
        <div className={getStartedStyle.title}>
          <h1>
            <FormattedMessage id="getStarted.title" />
          </h1>
        </div>
        <div className={[getStartedStyle.block, "row"].join(" ")}>
          <div className={["col-lg-12", getStartedStyle.lgCol].join(" ")}>
            <div className={["col-lg-12", getStartedStyle.lg8].join(" ")}>
              <h1 className={getStartedStyle.gitTitle}>
                <FormattedMessage id="getStarted.github.title" />
              </h1>
              <div className={getStartedStyle.githubApi}>
                <nav className={getStartedStyle.nav}>
                  <TabsComp
                    defaultActiveKey="solidity"
                    id="uncontrolled-tab-example"
                  >
                    <TabComp
                      eventKey="solidity"
                      title={
                        <span>
                          <img src={solidity} width="18" alt="" />
                          {" Solidity"}
                        </span>
                      }
                    >
                      <div className={getStartedStyle.tabContent} id="solidity">
                        <Code />
                      </div>
                    </TabComp>
                  </TabsComp>
                </nav>
                <nav className={getStartedStyle.navFoot}>
                  <a
                    className={getStartedStyle.navLink}
                    href="https://github.com/cartesi-corp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FormattedMessage id="getStarted.github.apiReferencee" />
                  </a>
                </nav>
              </div>
              <div className={getStartedStyle.repository}>
                <a
                  className={getStartedStyle.btnWhite}
                  href="https://github.com/cartesi-corp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="" />
                  <FormattedMessage id="getStarted.github.cartesi" />
                </a>
                <div className="first">
                  <img src={star} alt="star" />
                  <FormattedMessage id="getStarted.github.stars" />
                </div>
                <div>
                  <img src={commits} alt="commits" />
                  <FormattedMessage id="getStarted.github.commits" />
                </div>
                <div>
                  <img src={contributors} alt="contributors" />
                  <FormattedMessage id="getStarted.github.contributors" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs">
            <div className={["card", getStartedStyle.cardLayout].join(" ")}>
              <div className="row justify-content-center">
                <div className={getStartedStyle.imgAndSubtitle}>
                  <img src={figDeveloper} alt="Cartesi Developer" />
                  <p>
                    <FormattedMessage id="getStarted.developers.title" />
                  </p>
                </div>
              </div>
              <h2>
                <FormattedMessage id="getStarted.developers.subtitle" />
              </h2>
              <p>
                <FormattedMessage id="getStarted.developers.description" />
              </p>
              <button>
                <FormattedMessage id="getStarted.developers.join" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
