import React from "react"

import ambRequerimentsStyles from "../../../styles/styles_amb/requeriments.module.scss"
import iconMagnetic from "../../../images/ambassadors/ico-magnetic.svg"
import icoHand from "../../../images/ambassadors/ico-hand.svg"
import icoGroup from "../../../images/ambassadors/ico-group.svg"
import icoChat from "../../../images/ambassadors/ico-chat.svg"

const Requeriments = () => {
  return (
    <div id={ambRequerimentsStyles.ambRequeriments}>
      <section class={ambRequerimentsStyles.requirements}>
        <div class={ambRequerimentsStyles.container}>
          <h2
            class={[
              ambRequerimentsStyles.titles,
              ambRequerimentsStyles.titlesMedium,
            ].join(" ")}
          >
            Basic Requirements
          </h2>
          <div class={[ambRequerimentsStyles.content, "mx-auto"].join(" ")}>
            <div class="row">
              <div class={[ambRequerimentsStyles.contentItem].join(" ")}>
                <img
                  class={[
                    ambRequerimentsStyles.icons,
                    ambRequerimentsStyles.icoMagnetic,
                  ].join(" ")}
                  src={iconMagnetic}
                ></img>
                <p>
                  Hands-on knowledge of crypto markets, background in community
                  management, a proven influencer or marketing service provider.
                </p>
              </div>
              <div class={[ambRequerimentsStyles.contentItem]}>
                <img
                  class={[
                    ambRequerimentsStyles.icons,
                    ambRequerimentsStyles.icoHand,
                  ].join(" ")}
                  src={icoHand}
                ></img>
                <p>
                  Extensive understanding and genuine enthusiasm for Cartesi.
                </p>
              </div>
              <div class={[ambRequerimentsStyles.contentItem]}>
                <img
                  class={[
                    ambRequerimentsStyles.icons,
                    ambRequerimentsStyles.icoGroup,
                  ].join(" ")}
                  src={icoGroup}
                ></img>
                <p>
                  Highly-motivated and connected within cryptocurrency or
                  mainstream marketing spheres.
                </p>
              </div>
              <div class={[ambRequerimentsStyles.contentItem]}>
                <img
                  class={[
                    ambRequerimentsStyles.icons,
                    ambRequerimentsStyles.icoChat,
                  ].join(" ")}
                  src={icoChat}
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
