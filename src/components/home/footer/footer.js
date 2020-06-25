import React, { useState } from "react"
import { Link } from "gatsby"
import footerStyle from "./footer.module.scss"
import { FormComp } from "../../bootstrap.components"
import { FormattedMessage } from "gatsby-plugin-intl"
import geometric from "../../../images/SVG/footer/geometric-new.svg"
import discord from "../../../images/SVG/footer/discord.svg"
import github from "../../../images/SVG/footer/github.svg"
import medium from "../../../images/SVG/footer/medium.svg"
import telegram from "../../../images/SVG/footer/telegram.svg"
import twitter from "../../../images/SVG/footer/twitter.svg"
import logo from "../../../images/SVG/footer/logo.svg"

import outermeshRightSvg from "../../../images/footer/footer-outermesh-right.svg"
import outermeshLeftSvg from "../../../images/footer/footer-outermesh-left.svg"

const FormEmail = () => {
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
          <FormComp.Control required type="email" placeholder="" />
          <FormComp.Control.Feedback>Thank you!</FormComp.Control.Feedback>
          <FormComp.Control.Feedback style={{ fontWeight: 500 }} type="invalid">
            Please, insert your e-mail.
          </FormComp.Control.Feedback>
        </FormComp.Group>
        <FormComp.Group>
          <button type="submit">SUBSCRIBE</button>
        </FormComp.Group>
      </FormComp.Row>
    </FormComp>
  )
}

const Footer = () => (
  <div>
    <div className={footerStyle.footer}>
      <div
        // className={footerStyle.mask}
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
            <img src={discord} alt="Discord" />
            <img src={github} alt="Github" />
            <img src={twitter} alt="Twitter" />
            <img src={medium} alt="Medium" />
            <img src={telegram} alt="Telegram" />
          </div>
          <div className={[footerStyle.subscribe].join(" ")}>
            <FormEmail />
          </div>
        </div>
        <div className={[footerStyle.info, "row"].join(" ")}>
          <div className="col-xs">
            <ul>
              <li>
                <Link to="/">
                  <FormattedMessage id="footer.pages.about.title" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FormattedMessage id="footer.pages.developers.title" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FormattedMessage id="footer.pages.ecosystem.title" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FormattedMessage id="footer.pages.news.title" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-xs">
            <ul>
              <li>
                <Link to="/">
                  <FormattedMessage id="footer.pages.why.title" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FormattedMessage id="footer.pages.whitepaper.title" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FormattedMessage id="footer.pages.lightpaper.title" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FormattedMessage id="footer.pages.how.title" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-xs">
            <ul>
              <li>
                <Link to="/">
                  <FormattedMessage id="footer.pages.industries.title" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FormattedMessage id="footer.pages.roadmap.title" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FormattedMessage id="footer.pages.faq.title" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FormattedMessage id="footer.pages.team.title" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-xs">
            <ul>
              <li>
                <Link to="/">
                  <FormattedMessage id="footer.pages.advisor.title" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FormattedMessage id="footer.pages.partners.title" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FormattedMessage id="footer.pages.supporters.title" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FormattedMessage id="footer.pages.policy.title" />
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

export default Footer
