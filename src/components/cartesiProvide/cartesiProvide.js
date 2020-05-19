import React from "react"

import cartesiProvide from "./cartesiProvide.module.scss"
import { RowComp } from "../bootstrap.components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FormattedMessage } from "gatsby-plugin-intl"

const CartesiProvide = () => {
  return (
    <div>
      <div className={cartesiProvide.container}>
        <div className={cartesiProvide.boxCenter}>
          <RowComp xs={1} md={1} lg={1} xl={1}>
            <div className={cartesiProvide.tag}>
              <div  className={[cartesiProvide.cardNews, "card news"].join(" ")}>
                <p className={cartesiProvide.tagP}>
                  <span><FormattedMessage  id="provide.news.title"/></span>
                  <FormattedMessage  id="provide.news.description"/>{" "}
                  <i><FontAwesomeIcon icon={faExternalLinkAlt} /></i>
                </p>

                <div className={cartesiProvide.tagMobile}>
                  <div className="col">
                    <h6><FormattedMessage  id="provide.news.title"/></h6>
                  </div>
                  <div className="col">
                    <p>
                      <FormattedMessage  id="provide.news.description"/>{" "}
                      <i><FontAwesomeIcon icon={faExternalLinkAlt} /></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RowComp>
          <RowComp
            className={cartesiProvide.title}
            xs={1}
            md={1}
            lg={1}
            xl={1}
          >
            <h1>
              <FormattedMessage  id="provide.title"/>
            </h1>
          </RowComp>
          <RowComp
            className={cartesiProvide.subTitle}
            xs={1}
            md={1}
            lg={2}
            xl={1}
          >
            <p>
              <FormattedMessage  id="provide.description"/>
            </p>
          </RowComp>
        </div>
      </div>
    </div>
  )
}

export default CartesiProvide