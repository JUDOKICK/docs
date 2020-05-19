import React from "react"

import exploreStyle from "./exploreCartesi.module.scss"
import { RowComp, CardComp, CarouselComp } from "../bootstrap.components"
import iconSettings from "../../images/SVG/categories/thetech.svg"
import iconsDeveloper from "../../images/SVG/categories/developers.svg"
import iconEcosystem from "../../images/SVG/categories/ecosystem.svg"
import iconPartners from "../../images/SVG/categories/partners.svg"
import iconBlockchain from "../../images/SVG/explore/blockchain.svg"
import iconDevelopment from "../../images/SVG/explore/easeDevelopment.svg"
import iconRealOs from "../../images/SVG/explore/realOs.svg"
import { FormattedMessage } from "gatsby-plugin-intl"

const ExploreCartesi = () => (
  <div>
    <div className={exploreStyle.layout}>
      <RowComp className={exploreStyle.imgsList}>
        <div className={exploreStyle.blockImgResponsive}>
          <div className={exploreStyle.imgBox}>
            <img src={iconSettings} alt="#" />
            <p>
              <FormattedMessage id="explore.tech" />
            </p>
          </div>
          <div className={exploreStyle.imgBox}>
            <img src={iconsDeveloper} alt="#" />
            <p>
              <FormattedMessage id="explore.developers" />
            </p>
          </div>
          <div className={exploreStyle.imgBox}>
            <img src={iconEcosystem} alt="#" />
            <p>
              <FormattedMessage id="explore.ecosystem" />
            </p>
          </div>
          <div className={exploreStyle.imgBox}>
            <img src={iconPartners} alt="#" />
            <p>
              <FormattedMessage id="explore.partners" />
            </p>
          </div>
        </div>

        <CarouselComp className={exploreStyle.imgListMobile}>
          <CarouselComp.Item>
            <div className={exploreStyle.imgBox}>
              <img src={iconSettings} alt="#" />
              <p>
                <FormattedMessage id="explore.tech" />
              </p>
            </div>
          </CarouselComp.Item>
          <CarouselComp.Item>
            <div className={exploreStyle.imgBox}>
              <img src={iconsDeveloper} alt="#" />
              <p>
                <FormattedMessage id="explore.developers" />
              </p>
            </div>
          </CarouselComp.Item>
          <CarouselComp.Item>
            <div className={exploreStyle.imgBox}>
              <img src={iconEcosystem} alt="#" />
              <p>
                <FormattedMessage id="explore.ecosystem" />
              </p>
            </div>
          </CarouselComp.Item>
          <CarouselComp.Item>
            <div className={exploreStyle.imgBox}>
              <img src={iconPartners} alt="#" />
              <p>
                <FormattedMessage id="explore.partners" />
              </p>
            </div>
          </CarouselComp.Item>
        </CarouselComp>
      </RowComp>
      <div
        className={["container-fluid", exploreStyle.blockContainer].join(" ")}
      >
        <RowComp className={exploreStyle.title}>
          <h1>
            <FormattedMessage id="explore.title" />
          </h1>
        </RowComp>

        <RowComp className={exploreStyle.cardGroup}>
          <CardComp className={exploreStyle.cardLayout}>
            <div className="row justify-content-center">
              <img src={iconRealOs} alt="Real OS" />
            </div>

            <CardComp.Body className={exploreStyle.bodyLayout}>
              <RowComp className={exploreStyle.contentLayout}>
                <h4>
                  <FormattedMessage id="explore.realOs.title" />
                </h4>
                <p id={exploreStyle.p1}>
                  <FormattedMessage id="explore.realOs.description" />
                </p>
                <button>
                  <FormattedMessage id="explore.realOs.more" />
                </button>
              </RowComp>
            </CardComp.Body>
          </CardComp>

          <CardComp className={exploreStyle.cardLayout}>
            <div className="row justify-content-center">
              <img src={iconBlockchain} alt="Blockchain" />
            </div>
            <CardComp.Body className={exploreStyle.bodyLayout}>
              <RowComp className={exploreStyle.contentLayout}>
                <h4>
                  <FormattedMessage id="explore.blockchain.title" />
                </h4>
                <p id={exploreStyle.p2}>
                  <FormattedMessage id="explore.blockchain.description" />
                </p>
                <button>
                  <FormattedMessage id="explore.blockchain.more" />
                </button>
              </RowComp>
            </CardComp.Body>
          </CardComp>

          <CardComp className={exploreStyle.cardLayout}>
            <div className="row justify-content-center">
              <img src={iconDevelopment} alt="Development" />
            </div>
            <CardComp.Body className={exploreStyle.bodyLayout}>
              <RowComp className={exploreStyle.contentLayout}>
                <h4>
                  <FormattedMessage id="explore.development.title" />
                </h4>
                <p id={exploreStyle.p3}>
                  <FormattedMessage id="explore.development.description" />
                </p>
                <button>
                  <FormattedMessage id="explore.development.more" />
                </button>
              </RowComp>
            </CardComp.Body>
          </CardComp>
        </RowComp>
      </div>
    </div>
  </div>
)
export default ExploreCartesi
