import React from "react"
import { Link } from "gatsby"

import benefitsStyles from "../../../styles/styles_amb/befenetis.module.scss"
import icoCalender from "../../../images/ambassadors/ico-calender.svg"
import icoNetwork from "../../../images/ambassadors/ico-network.svg"
import icoMegaphone from "../../../images/ambassadors/ico-megaphone.svg"
import icoCertified from "../../../images/ambassadors/ico-certified.svg"
import icoStar from "../../../images/ambassadors/ico-star.svg"
import icoKey from "../../../images/ambassadors/ico-key.svg"
import icoBlock from "../../../images/ambassadors/ico-block.svg"
import icoPosition from "../../../images/ambassadors/ico-position.svg"

const Benefits = () => {
  return (
    <div id={benefitsStyles.ambBenefits}>
      <section className={benefitsStyles.benefits}>
        <div className={benefitsStyles.container}>
          <div className="row">
            <div className={benefitsStyles.content}>
              <h2
                className={[
                  benefitsStyles.titles,
                  benefitsStyles.titlesMedium,
                ].join(" ")}
              >
                Benefits of Cartesi Ambassadors
              </h2>
              <p>
                A Cartesi ambassador will become a part and represent Cartesi’s
                unique ecosystem of DApps. Accordingly, you will have first-hand
                access to various of our strategies, upcoming announcements and
                more substantial planned actions for mass adoption within crypto
                and around the world.
              </p>
              <div className={benefitsStyles.dFlex}>
                <Link
                  to="ambassadors/#getstarted"
                  className={[
                    benefitsStyles.btn,
                    benefitsStyles.btnAzul,
                    "mx-auto mx-lg-0",
                  ].join(" ")}
                  //   className={benefitsStyles.title}
                >
                  Become an Ambassador
                </Link>
              </div>
            </div>
            <div className={benefitsStyles.content}>
              <div className={benefitsStyles.contentItem}>
                <img
                  className={[
                    benefitsStyles.icons,
                    benefitsStyles.icoCalender,
                  ].join(" ")}
                  src={icoCalender}
                ></img>
                <p>
                  Early access to official releases, valuable information and
                  strategic outreach through Cartesi’s marketing team.
                </p>
              </div>
              <div className={benefitsStyles.contentItem}>
                <img
                  className={[
                    benefitsStyles.icons,
                    benefitsStyles.icoNetwork,
                  ].join(" ")}
                  src={icoNetwork}
                ></img>
                <p>
                  Networking opportunities with Cartesi Team members, partners,
                  and other ambassadors.
                </p>
              </div>
              <div className={benefitsStyles.contentItem}>
                <img
                  className={[
                    benefitsStyles.icons,
                    benefitsStyles.icoMegaphone,
                  ].join(" ")}
                  src={icoMegaphone}
                ></img>
                <p>
                  Active participation in other similar programmes through
                  Cartesi’s incubation program for start-ups.
                </p>
              </div>
              <div className={benefitsStyles.contentItem}>
                <img
                  className={[
                    benefitsStyles.icons,
                    benefitsStyles.icoCertified,
                  ].join(" ")}
                  src={icoCertified}
                ></img>
                <p>
                  Official title and recognition on the Cartesi Ambassadors
                  page.
                </p>
              </div>
              <div className={benefitsStyles.contentItem}>
                <img
                  className={[
                    benefitsStyles.icons,
                    benefitsStyles.icoStar,
                  ].join(" ")}
                  src={icoStar}
                ></img>
                <p>
                  Official recognition and the opportunities to attend local
                  meet-ups and conferences with the Cartesi team.
                </p>
              </div>
              <div className={benefitsStyles.contentItem}>
                <img
                  className={[benefitsStyles.icons, benefitsStyles.icoKey].join(
                    " "
                  )}
                  src={icoKey}
                ></img>
                <p>
                  CTSI Token awards based on your active involvement, actions
                  and general importance to Cartesi.
                </p>
              </div>
              <div className={benefitsStyles.contentItem}>
                <img
                  className={[
                    benefitsStyles.icons,
                    benefitsStyles.icoBlock,
                  ].join(" ")}
                  src={icoBlock}
                ></img>
                <p>
                  Other ambassadors__benefits and awards the Cartesi Foundation
                  may grant.
                </p>
              </div>
              <div className={benefitsStyles.contentItem}>
                <img
                  className={[
                    benefitsStyles.icons,
                    benefitsStyles.icoPosition,
                  ].join(" ")}
                  src={icoPosition}
                ></img>
                <p>
                  Cartesi may announce the position on social media and create a
                  composition piece introducing you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Benefits
