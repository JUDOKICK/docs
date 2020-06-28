import React from "react"
import styles from "./partners.module.scss"
import { RowComp } from "../../bootstrap.components"
// import partnersLeftPng from "../../../images/home/partners/partners-left.png"
// import partnersRightPng from "../../../images/home/partners/partners-right.png"
import outermeshSvg from "../../../images/home/partners/outermesh-partners.svg"
import linesSvg from "../../../images/home/partners/lines.svg"

// PARTNERS
import ldcapitalPng from "../../../images/home/partners/logos/ldcapital.png"
import newfangPng from "../../../images/home/partners/logos/newfang.png"
import snzPng from "../../../images/home/partners/logos/snz.png"
import artesianPng from "../../../images/home/partners/logos/artesian.png"
import chinacceleratorPng from "../../../images/home/partners/logos/chinaccelerator.png"
import bigbangangelsPng from "../../../images/home/partners/logos/bigbangangels.png"
import goblockPng from "../../../images/home/partners/logos/goblock.png"
import sosvPng from "../../../images/home/partners/logos/sosv.png"
import maticPng from "../../../images/home/partners/logos/matic.png"
import acrossasiaalliancePng from "../../../images/home/partners/logos/acrossasiaalliance.png"
import taiwantechPng from "../../../images/home/partners/logos/taiwantech.png"
import startupstadiumPng from "../../../images/home/partners/logos/startupstadium.png"
import ethereumalliancePng from "../../../images/home/partners/logos/ethereumalliance.png"

import { FormattedMessage } from "gatsby-plugin-intl"

const Partners = () => (
  <div>
    <div className={styles.layout}>
      <div className={["container-fluid", styles.blockContainer].join(" ")}>
        <RowComp className={styles.title}>
          <h1>
            <FormattedMessage id="home.partners.title" />
          </h1>
        </RowComp>
        <RowComp className={styles.partnersContainer}>
          {/* <div>
            <img src={partnersLeftPng} alt="" />
          </div>
          <div style={{ marginLeft: "-2px" }}>
            <img src={partnersRightPng} alt="" />
          </div> */}
          <div className={styles.partnerRow}>
            <PartnerBlock img={ldcapitalPng} link="https://ldcap.com/" />
            <PartnerBlock lines={true} />
            <PartnerBlock img={newfangPng} link="https://newfang.io/" />
            <PartnerBlock />
            <PartnerBlock img={goblockPng} link="https://www.goblock.com.br/" />
            <PartnerBlock img={maticPng} link="https://matic.network/" />
            <PartnerBlock
              img={acrossasiaalliancePng}
              link="http://acrossasia.org/"
            />
            <PartnerBlock />
          </div>

          <div className={styles.partnerRow}>
            <PartnerBlock />
            <PartnerBlock img={snzPng} link="https://snzholding.com/" />
            <PartnerBlock
              img={artesianPng}
              link="https://www.artesianinvest.com/"
            />
            <PartnerBlock
              img={chinacceleratorPng}
              link="https://chinaccelerator.com/"
            />
            <PartnerBlock img={sosvPng} link="https://sosv.com/" />
            <PartnerBlock lines={true} />
            <PartnerBlock />
            <PartnerBlock
              img={ethereumalliancePng}
              link="https://entethalliance.org/"
            />
          </div>

          <div className={styles.partnerRow}>
            <PartnerBlock />
            <PartnerBlock />
            <PartnerBlock />
            <PartnerBlock
              img={bigbangangelsPng}
              link="http://www.bigbangangels.com/en/?ckattempt=1"
            />
            <PartnerBlock />
            <PartnerBlock
              img={taiwantechPng}
              link="https://taiwanarena.tech/"
            />
            <PartnerBlock
              img={startupstadiumPng}
              link="https://www.startupstadium.tw/"
            />
            <PartnerBlock />
          </div>
        </RowComp>
        <img className={styles.svgLeft} src={outermeshSvg} alt="Lines left" />
      </div>
    </div>
  </div>
)

const PartnerBlock = ({ lines = false, img = "", link = "" }) => {
  return (
    <div
      className={`${styles.partnerBlock} ${
        !img || lines ? styles.partnerBlockEmpty : ""
      }`}
    >
      {!!img ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={img} alt="" />
        </a>
      ) : (
        lines && <img src={linesSvg} className={styles.partnerLines} alt="" />
      )}
    </div>
  )
}

export default Partners
