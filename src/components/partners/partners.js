import React from "react"
import partnersStyle from "./partners.module.scss"
import bgSvg from "../../images/SVG/partners/partners-mapped.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FormattedMessage } from "gatsby-plugin-intl"

const Partners = () => {
  return (
    <div>
      <div className={[partnersStyle.partners, "row"].join(" ")}>
        <div
          className={[partnersStyle.description, "col-xs col-sm col-lg"].join(
            " "
          )}
        >
          <div className={["row", partnersStyle.rowTag].join(" ")}>
            <div className={partnersStyle.tag}>
              <div className={[partnersStyle.cardNews, "card news"].join(" ")}>
                <p className={partnersStyle.tagP}>
                  <span>
                    <FormattedMessage id="partners.news.title" />
                  </span>
                  <FormattedMessage id="partners.news.description" />{" "}
                  <i>
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </i>
                </p>

                <div className={partnersStyle.tagMobile}>
                  <div className="col">
                    <h6>
                      <FormattedMessage id="partners.news.title" />
                    </h6>
                  </div>
                  <div className="col">
                    <p>
                      <FormattedMessage id="partners.news.description" />{" "}
                      <i>
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <h1>
              <FormattedMessage id="partners.title" />{" "}
            </h1>
          </div>
          <div className={["row", partnersStyle.subtitle].join(" ")}>
            <p>
              <FormattedMessage id="partners.description" />{" "}
            </p>
          </div>
        </div>
        <div className={["col-7", partnersStyle.colImg].join(" ")}>
          <div className={partnersStyle.rowImgs}>
            <img src={bgSvg} useMap="#image-map" alt="" />
          </div>
        </div>
        <div className={["row", partnersStyle.swipe].join(" ")}>
          <p>
            <FormattedMessage id="partners.swipe" />
            {"> "}
          </p>
        </div>
      </div>

      <map name="image-map">
        <area
          target="_blank"
          alt="LD Capital"
          title="LD Capital"
          href="https://ldcap.com/"
          coords="273,119,162,19"
          shape="rect"
        />
        <area
          target="_blank"
          alt="Enterprise Ethereum Alliance"
          title="Enterprise Ethereum Alliance"
          href="https://entethalliance.org/"
          coords="580,28,720,119"
          shape="rect"
        />
        <area
          target="_blank"
          alt="NewFang"
          title="NewFang"
          href="https://newfang.io/"
          coords="432,261,287,175"
          shape="rect"
        />
        <area
          target="_blank"
          alt="GoBlock"
          title="GoBlock"
          href="https://www.goblock.com.br/"
          coords="444,178,566,262"
          shape="rect"
        />
        <area
          target="_blank"
          alt="Matic"
          title="Matic"
          href="https://matic.network/"
          coords="593,180,712,261"
          shape="rect"
        />
        <area
          target="_blank"
          alt="Across Asian alliance"
          title="Across Asian alliance"
          href="http://acrossasia.org/"
          coords="730,182,863,262"
          shape="rect"
        />
        <area
          target="_blank"
          alt="SNZ"
          title="SNZ"
          href="https://snzholding.com/"
          coords="12,325,131,401"
          shape="rect"
        />
        <area
          target="_blank"
          alt="Artesian Invest"
          title="Artesian Invest"
          href="https://www.artesianinvest.com/"
          coords="148,327,282,398"
          shape="rect"
        />
        <area
          target="_blank"
          alt="China Accelerator"
          title="China Accelerator"
          href="https://chinaccelerator.com/"
          coords="301,317,421,419"
          shape="rect"
        />
        <area
          target="_blank"
          alt="SOSV"
          title="SOSV"
          href="https://sosv.com/"
          coords="443,323,565,415"
          shape="rect"
        />
        <area
          target="_blank"
          alt="Big Bang Angels"
          title="Big Bang Angels"
          href="http://www.bigbangangels.com/"
          coords="287,472,432,545"
          shape="rect"
        />
        <area
          target="_blank"
          alt="Taiwan arena"
          title="Taiwan arena"
          href="https://taiwanarena.tech/index"
          coords="580,475,720,550"
          shape="rect"
        />
        <area
          target="_blank"
          alt="Taiwan Startup Stadium"
          title="Taiwan Startup Stadium"
          href="https://www.startupstadium.tw/"
          coords="740,451,858,570"
          shape="rect"
        />
      </map>
    </div>
  )
}

export default Partners
