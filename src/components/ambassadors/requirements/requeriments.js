import React from "react"

import ambRequerimentsStyles from "../../../styles/styles_amb/requeriments.module.scss"
import iconMagnetic from "../../../images/ambassadors/ico-magnetic.svg"
import icoHand from "../../../images/ambassadors/ico-hand.svg"
import icoGroup from "../../../images/ambassadors/ico-group.svg"
import icoChat from "../../../images/ambassadors/ico-chat.svg"

const Requeriments = () => {
  return (
    <div id={ambRequerimentsStyles.ambRequeriments}>
      <section className={ambRequerimentsStyles.requirements}>
        <div className={ambRequerimentsStyles.container}>
          <h2
            className={[
              ambRequerimentsStyles.titles,
              ambRequerimentsStyles.titlesMedium,
            ].join(" ")}
          >
            Basic Requirements
          </h2>
          <div className={[ambRequerimentsStyles.content, "mx-auto"].join(" ")}>
            <div className="row">
              <div className={[ambRequerimentsStyles.contentItem].join(" ")}>
                <img
                  className={[
                    ambRequerimentsStyles.icons,
                    ambRequerimentsStyles.icoMagnetic,
                  ].join(" ")}
                  src={iconMagnetic}
                  alt="Magnetic"
                ></img>
                <p>
                  Hands-on knowledge of crypto markets, background in community
                  management, a proven influencer or marketing service provider.
                </p>
              </div>
              <div className={[ambRequerimentsStyles.contentItem]}>
                <img
                  className={[
                    ambRequerimentsStyles.icons,
                    ambRequerimentsStyles.icoHand,
                  ].join(" ")}
                  src={icoHand}
                  alt="Hand"
                ></img>
                <p>
                  Extensive understanding and genuine enthusiasm for Cartesi.
                </p>
              </div>
              <div className={[ambRequerimentsStyles.contentItem]}>
                <img
                  className={[
                    ambRequerimentsStyles.icons,
                    ambRequerimentsStyles.icoGroup,
                  ].join(" ")}
                  src={icoGroup}
                  alt="Group"
                ></img>
                <p>
                  Highly-motivated and connected within cryptocurrency or
                  mainstream marketing spheres.
                </p>
              </div>
              <div className={[ambRequerimentsStyles.contentItem]}>
                <img
                  className={[
                    ambRequerimentsStyles.icons,
                    ambRequerimentsStyles.icoChat,
                  ].join(" ")}
                  src={icoChat}
                  alt="chat"
                ></img>
                <p>Exemplary talent and impeccable communication skills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Requeriments
