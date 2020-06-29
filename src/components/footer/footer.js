import React, { useState } from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import footerStyle from "./footer.module.scss"
import { FormComp } from "../bootstrap.components"
import { FormattedMessage } from "gatsby-plugin-intl"
import geometric from "../../images/SVG/footer/geometric-new.svg"
import discord from "../../images/SVG/footer/discord.svg"
import github from "../../images/SVG/footer/github.svg"
import medium from "../../images/SVG/footer/medium.svg"
import telegram from "../../images/SVG/footer/telegram.svg"
import twitter from "../../images/SVG/footer/twitter.svg"
import logo from "../../images/SVG/footer/logo.svg"

import outermeshRightSvg from "../../images/footer/footer-outermesh-right.svg"
import outermeshLeftSvg from "../../images/footer/footer-outermesh-left.svg"

const FormEmail = ({ secondFooter }) => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = event => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <FormComp noValidate validated={validated} onSubmit={handleSubmit}>
      <FormComp.Row className={footerStyle.footerForm}>
        <FormComp.Group controlId="validationCustom01">
          <FormComp.Control required type="email" placeholder="E-mail" />
          <FormComp.Control.Feedback>Thank you!</FormComp.Control.Feedback>
          <FormComp.Control.Feedback style={{ fontWeight: 500 }} type="invalid">
            Please, insert your e-mail.
          </FormComp.Control.Feedback>
        </FormComp.Group>
        <FormComp.Group>
          <button
            className={[
              classNames({ [footerStyle.secondFooter]: secondFooter }),
              footerStyle.dynamicClass,
            ].join(" ")}
            type="submit"
          >
            SUBSCRIBE
          </button>
        </FormComp.Group>
      </FormComp.Row>
    </FormComp>
  )
}

/* The name of the page using the footer must be passed via the props as pageName, 
example: "about", "press", except when it is "home" */
const Footer = ({ secondFooter, pageName }) => {
  var lang = "en"
  var page = pageName !== undefined || pageName === "home" ? pageName : ""

  return (
    <div>
      <div className={footerStyle.footer} id="footer">
        <div
          style={{
            background: `url(${geometric})`,
          }}
        ></div>
        <div className={footerStyle.blockContent}>
          <div className={[footerStyle.contactBox].join("")}>
            <h1>
              <FormattedMessage id="footer.title" />
            </h1>
            <div className={[footerStyle.socialList].join(" ")}>
              <a
                href="https://discord.gg/Pt2NrnS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={discord} alt="Discord" />
              </a>
              <a
                href="https://www.github.com/cartesi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="Github" />
              </a>
              <a
                href="https://www.twitter.com/cartesiproject"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="Twitter" />
              </a>
              <a
                href="https://www.medium.com/cartesi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={medium} alt="Medium" />
              </a>
              <a
                href="https://t.me/cartesiannouncements"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={telegram} alt="Telegram" />
              </a>
            </div>
            <div className={[footerStyle.subscribe].join(" ")}>
              <FormEmail secondFooter={secondFooter} />
            </div>
          </div>
          <div className={[footerStyle.info, "row"].join(" ")}>
            <div className="col-xs">
              <ul>
                <li>
                  <Link to={`/${lang}/about/#team`}>
                    <FormattedMessage id="footer.pages.company.title" />
                  </Link>
                </li>
                <li>
                  <Link to={`/${lang}/about/#team`}>
                    <FormattedMessage id="footer.pages.team.title" />
                  </Link>
                </li>
                <li>
                  <a
                    href="https://angel.co/company/cartesi/jobs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FormattedMessage id="footer.pages.careers.title" />
                  </a>
                </li>
                <li>
                  <Link to={`/${lang}/press`}>
                    <FormattedMessage id="footer.pages.press.title" />
                  </Link>
                </li>
                <li>
                  <Link to={`/${lang}/${page}/#footer`}>
                    <FormattedMessage id="footer.pages.contact.title" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xs">
              <ul>
                <li>
                  <a
                    href="https://medium.com/cartesi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FormattedMessage id="footer.pages.blog.title" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://creepts.cartesi.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FormattedMessage id="footer.pages.dapps.title" />
                  </a>
                </li>
                <li>
                  <Link to={`/${lang}/community/#ambassadors`}>
                    <FormattedMessage id="footer.pages.ambassadors.title" />
                  </Link>
                </li>
                <li>
                  <Link to={`/${lang}/community/#channels`}>
                    <FormattedMessage id="footer.pages.channels.title" />
                  </Link>
                </li>
                <li>
                  <Link to={`/${lang}/ecosystem/`}>
                    <FormattedMessage id="footer.pages.ecosystem.title" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xs">
              <ul>
                <li>
                  <a
                    href="https://medium.com/cartesi/tagged/tech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FormattedMessage id="footer.pages.technology.title" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://cartesi.io/cartesi_whitepaper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FormattedMessage id="footer.pages.whitepaper.title" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/cartesi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FormattedMessage id="footer.pages.github.title" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.coingecko.com/en/coins/cartesi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FormattedMessage id="footer.pages.ctsitoken.title" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FormattedMessage id="footer.pages.developer.title" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs">
              <ul>
                <li>
                  <Link to={`/${lang}/${page}/#`}>
                    <FormattedMessage id="footer.pages.faq.title" />
                  </Link>
                </li>
                <li>
                  <a
                    href="https://cartesi.io/cartesi_lightpaper_english.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FormattedMessage id="footer.pages.lightpaper.title" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://medium.com/cartesi/on-linux-and-blockchains-a955a49a84e1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FormattedMessage id="footer.pages.ctsibeginners.title" />
                  </a>
                </li>
                <li>
                  <Link to={`/${lang}/#partners`}>
                    <FormattedMessage id="footer.pages.partners.title" />
                  </Link>
                </li>
                <li>
                  <Link to={`/${lang}/${page}/#`}>
                    <FormattedMessage id="footer.pages.privacy.title" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className={footerStyle.foundation}>
              <img src={logo} alt="Cartesi" />
              <p>
                <FormattedMessage id="footer.description" />
              </p>
            </div>
          </div>
          <img
            className={footerStyle.svgRight}
            src={outermeshRightSvg}
            alt="Lines right"
          />
          <img
            className={footerStyle.svgLeft}
            src={outermeshLeftSvg}
            alt="Lines left"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
