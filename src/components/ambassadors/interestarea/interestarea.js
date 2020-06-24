import React from "react"
import { Link } from "gatsby"

import interestAreaStyles from "../../../styles/styles_amb/interestarea.module.scss"
import icoWorld from "../../../images/ambassadors/ico-world.svg"
import icoPeople from "../../../images/ambassadors/ico-people.svg"
import icoShare from "../../../images/ambassadors/ico-share.svg"
import icoEye from "../../../images/ambassadors/ico-eye.svg"
import icoMotion from "../../../images/ambassadors/ico-motion.svg"
import icoBlock from "../../../images/ambassadors/ico-block.svg"

const Interestarea = () => {
  return (
    <div id={interestAreaStyles.ambInterestarea}>
      <section
        className={[
          interestAreaStyles.interestarea,
          interestAreaStyles.parallax,
        ].join(" ")}
        data-speed="10"
      >
        <div className={interestAreaStyles.container}>
          <h2
            className={[
              interestAreaStyles.titles,
              interestAreaStyles.titlesMedium,
            ].join(" ")}
          >
            Ambassador Areas & Fields
          </h2>
          <div className={[interestAreaStyles.content, "mx-auto"].join(" ")}>
            <p className={[interestAreaStyles.contentInfo].join(" ")}>
              To exceptionally occupy the leading role of a Cartesi ambassador,
              we’ve highlighted the various areas of active interest. This
              represents a general criteria list of specific talent we are
              seeking. Provided your specific area of expertise does not fall in
              the fields below, we still encourage you to promptly submit an
              application if you genuinely feel you can be of benefit to
              Cartesi!
            </p>
            <div className="row">
              <div className={[interestAreaStyles.contentItem].join(" ")}>
                <img
                  className={[
                    interestAreaStyles.icons,
                    interestAreaStyles.icoWorld,
                  ].join(" ")}
                  src={icoWorld}
                ></img>
                <p>
                  Global, regional, and local crypto influencers; community
                  managers, experts, traders, and marketers.
                </p>
              </div>
              <div className={[interestAreaStyles.contentItem].join(" ")}>
                <img
                  className={[
                    interestAreaStyles.icons,
                    interestAreaStyles.icoPeople,
                  ].join(" ")}
                  src={icoPeople}
                ></img>
                <p>
                  Having an already existing user-base or community that you’re
                  the leader of and capability to promote Cartesi to said group.
                </p>
              </div>
              <div className={[interestAreaStyles.contentItem].join(" ")}>
                <img
                  className={[
                    interestAreaStyles.icons,
                    interestAreaStyles.icoShare,
                  ].join(" ")}
                  src={icoShare}
                ></img>
                <p>
                  Ability to engage and share Cartesi and Cartesi’s DApps with
                  creative individuals.
                </p>
              </div>
              <div className={[interestAreaStyles.contentItem].join(" ")}>
                <img
                  className={[
                    interestAreaStyles.icons,
                    interestAreaStyles.icoEye,
                  ].join(" ")}
                  src={icoEye}
                ></img>
                <p>
                  Directing new individuals to Cartesi’s environment,
                  communities and critical locations.
                </p>
              </div>
              <div className={[interestAreaStyles.contentItem].join(" ")}>
                <img
                  className={[
                    interestAreaStyles.icons,
                    interestAreaStyles.icoMotion,
                  ].join(" ")}
                  src={icoMotion}
                ></img>
                <p>
                  Highly experienced within the cryptocurrency industry,
                  mainstream marketing or have an existing infrastructure to
                  promote cryptos and blockchain technologies.
                </p>
              </div>
              <div className={[interestAreaStyles.contentItem].join(" ")}>
                <img
                  className={[
                    interestAreaStyles.icons,
                    interestAreaStyles.icoBlock,
                  ].join(" ")}
                  src={icoBlock}
                ></img>
                <p>
                  Developers interested in building DApps or developing with
                  Cartesi.
                </p>
              </div>
            </div>
          </div>
          <Link
            to="ambassadors/#getstarted"
            className={[
              interestAreaStyles.btn,
              interestAreaStyles.btnAzul,
              "mt-4",
            ].join(" ")}
            title="Apply now"
          >
            Apply now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Interestarea
